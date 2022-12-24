using System;
using System.Net;
using System.Net.Sockets;
using System.Text;
using System.Threading;
using System.Configuration;
using System.IO;
using System.Collections.Generic;
using System.Drawing;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
namespace TestSever
{
    class Program
    {
        private static string Logpath = ConfigurationManager.AppSettings["Logpath"].ToString();
        private static object contents;
        private static object overload;

        static void Main(string[] args)
        {
            StartServer();
        }
        public static void StartServer()
        {
            // Get Host IP Address that is used to establish a connection  
            // In this case, we get one IP address of localhost that is IP : 127.0.0.1  
            // If a host has multiple addresses, you will get a list of addresses  
           string tcpip = "127.0.0.1";
            int tcpport = 7606;
            string ip = ConfigurationManager.AppSettings["IP"].ToString();// "127.0.0.1";
            int port = Convert.ToInt32(ConfigurationManager.AppSettings["PORT"].ToString());// 80;
           // IPHostEntry host = Dns.GetHostEntry("localhost");
            IPAddress ipAddress = IPAddress.Parse(ip); //  host.AddressList[0]//
            IPEndPoint localEndPoint = new IPEndPoint(ipAddress, port);


            try
            {

                // Create a Socket that will use Tcp protocol      
                Socket listener = new Socket(ipAddress.AddressFamily, SocketType.Stream, ProtocolType.Tcp);
                // A Socket must be associated with an endpoint using the Bind method  
                listener.Bind(localEndPoint);
                // Specify how many requests a Socket can listen before it gives Server busy response.  
                // We will listen 10 requests at a time  
                listener.Listen(10);

                Console.WriteLine("SERVER START...");
                Console.WriteLine("Waiting for a connection...");

                Socket handler = listener.Accept();
                var server = new TcpListener(IPAddress.Parse(tcpip), tcpport);
                /// var udpclient=new UdpClient(ipep);
                server.Start();
                Console.WriteLine("Server has started on {0}:{1}, Waiting for a connection...", ip, port);

               TcpClient client = server.AcceptTcpClient();
                Console.WriteLine("A client connected.");

               NetworkStream stream = client.GetStream();
                // Incoming data from the client.    
                string data = "";
                byte[] bytes = null;


                List<OrderItems> Itemlist;
                Items its = null;
                string parentsno = "000";
                Image img1 = Image.FromFile(@"C:\Users\dnadmin\Desktop\OCS_Server\Upsell_Images\OSC_UX_1-11.png");
                Image img2 = Image.FromFile(@"C:\Users\dnadmin\Desktop\OCS_Server\Upsell_Images\082421_Day_Chicken_OCS_OrderDetailUpsell.jpg");
                int totalitems = 0;
                while (true)
                {
                    while (!stream.DataAvailable) ;
                    while (client.Available < 3) ;
                    byte[] tbytes = new byte[client.Available];
                    stream.Read(tbytes, 0, client.Available);
                    string st = Encoding.UTF8.GetString(tbytes);

                    if (Regex.IsMatch(st, "^GET", RegexOptions.IgnoreCase))
                    {
                        Console.WriteLine("=====Handshaking from client=====\n{0}", st);

                        // 1. Obtain the value of the "Sec-WebSocket-Key" request header without any leading or trailing whitespace
                        // 2. Concatenate it with "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" (a special GUID specified by RFC 6455)
                        // 3. Compute SHA-1 and Base64 hash of the new value
                        // 4. Write the hash back as the value of "Sec-WebSocket-Accept" response header in an HTTP response
                        string swk = Regex.Match(st, "Sec-WebSocket-Key: (.*)").Groups[1].Value.Trim();
                        string swka = swk + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11";
                        byte[] swkaSha1 = System.Security.Cryptography.SHA1.Create().ComputeHash(Encoding.UTF8.GetBytes(swka));
                        string swkaSha1Base64 = Convert.ToBase64String(swkaSha1);

                        // HTTP/1.1 defines the sequence CR LF as the end-of-line marker
                        byte[] response = Encoding.ASCII.GetBytes(
                            "HTTP/1.1 101 Switching Protocols\r\n" +
                            "Connection: Upgrade\r\n" +
                            "Upgrade: websocket\r\n" +
                            "Sec-WebSocket-Accept: " + swkaSha1Base64 + "\r\n\r\n");

                        stream.Write(response, 0, response.Length);
                    }
                    else
                    {
                    bytes = new byte[8192];
                    int bytesRec = handler.Receive(bytes);
                    byte[] temp = new byte[bytesRec];
                    int j = 0;
                    for (int k = 0; k < bytesRec; k++)
                    {
                        if (bytes[k] != 0)
                        {
                            temp[j] = bytes[k];
                            j++;
                        }
                    }


                    // bytes = Enumerable.RangeConvert.ToByte(s.
                    data = Encoding.Default.GetString(temp, 0, j);
                    //data = data.Replace("\u0001", "").Replace("?.", "").Replace("#", string.Empty).Replace("?", string.Empty).Replace("à.", string.Empty).Replace("Ç", string.Empty);

                     Console.WriteLine( data);
                   
                    if (!string.IsNullOrEmpty(data))
                        {
                            string[] headerStrings = { "</xsAppData>" };


                            string[] order = { "OrderItemEnd", "OrderItemBegin", "Welcome" };
                            string[] des = { "2042" };

                            string[] words = data.Split(headerStrings, System.StringSplitOptions.RemoveEmptyEntries);
                        bool finaltax = data.Contains("Tax");
                        bool finalamount = data.Contains("Amount");
                        bool status=data.Contains("GetStatus");
                        if (!finaltax && !finalamount)
                        {
                            if (!status)
                            {
                                Itemlist = new List<OrderItems>();
                                its = new Items();
                                its.orderDetails = new List<OrderItems>();

                                its.metaInfo = new metadata();

                                its.metaInfo.totalOrderedItems = 0;
                            }
                        }
                        for (int i = 0; i < words.Length; i++)
                                {
                                   bool flag = false;
                                  bool b = words[i].Contains("OrderItemBegin");
                                    bool e = words[i].Contains("OrderItemEnd");
                                    bool w = words[i].Contains("Welcome");
                                    bool g = words[i].Contains("GetStatus");
                                 
                                    if (!b && !e && !w && !g)
                                    { 
                                    string[] item = words[i].Split(' ');
                                if (!(words[i].Substring(item[0].Length + 30, 8).Contains("-")))
                                {

                                    OrderItems it = new OrderItems();
                                    bool amount = (words[i].Contains("Amount"));
                                    bool tax = words[i].Contains("Tax");
                                    if (((!amount) && (!tax)))
                                    {
                                        flag = false;
                                        if (its.orderDetails.Count > 0)
                                        {
                                            foreach (OrderItems o in its.orderDetails)
                                            {

                                                if (o.Serialnumber == item[6])
                                                {
                                                    flag = true;
                                                    subitems subitem = new subitems();
                                                    subitem.modifier = item[0].Substring(item[0].Length - 1, 1);
                                                    subitem.beverage = item[1];
                                                    subitem.food = item[2];
                                                    subitem.Entrée = item[3];
                                                    subitem.Serialnumber = item[4];
                                                    parentsno = item[4];
                                                    subitem.Sequencenumber = item[5];
                                                    subitem.Parentserialnumber = item[6];
                                                    subitem.Discount = item[7];

                                                    subitem.positive = item[9];
                                                    subitem.Price = item[10] + item[11] + item[12] + item[13] + item[14] + item[15] + item[16];
                                                    subitem.Price = words[i].Substring(item[0].Length + 30, 8) + "." + words[i].Substring(item[0].Length + 38, 2);
                                                    subitem.description = words[i].Substring(64, (words[i].Length - 64));
                                                    string[] de = subitem.description.Split(des, System.StringSplitOptions.RemoveEmptyEntries);
                                                    subitem.description = de[0];

                                                    if (!string.IsNullOrEmpty(item[8]))
                                                    {
                                                        if (Convert.ToInt16(item[8]) > 1)
                                                            if (Convert.ToInt16(item[8]) > 9)
                                                                subitem.Itemquantity = (item[8]);
                                                            else
                                                            {
                                                                subitem.Itemquantity = (item[8]);

                                                            }
                                                        else
                                                            subitem.Itemquantity = "";
                                                    }
                                                    subitem.items = new List<minsubitems>();
                                                    o.items.Add(subitem);

                                                }
                                                else
                                                {
                                                    if (o.items.Count > 0)
                                                    {
                                                        foreach (subitems s in o.items)
                                                        {

                                                            if (s.Serialnumber == item[6])
                                                            {
                                                                flag = true;
                                                                minsubitems mitem = new minsubitems();
                                                                mitem.modifier = item[0].Substring(item[0].Length - 1, 1);
                                                                mitem.beverage = item[1];
                                                                mitem.food = item[2];
                                                                mitem.Entrée = item[3];
                                                                mitem.Serialnumber = item[4];
                                                                parentsno = item[4];
                                                                mitem.Sequencenumber = item[5];
                                                                mitem.Parentserialnumber = item[6];
                                                                mitem.Discount = item[7];

                                                                mitem.positive = item[9];
                                                                mitem.Price = item[10] + item[11] + item[12] + item[13] + item[14] + item[15] + item[16];
                                                                mitem.Price = words[i].Substring(item[0].Length + 30, 8) + "." + words[i].Substring(item[0].Length + 38, 2);
                                                                mitem.description = words[i].Substring(64, (words[i].Length - 64));
                                                                string[] de = mitem.description.Split(des, System.StringSplitOptions.RemoveEmptyEntries);
                                                                mitem.description = de[0];
                                                                s.items.Add(mitem);

                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }

                                        if (!flag)
                                        {
                                            it.modifier = item[0].Substring(item[0].Length - 1, 1);
                                            it.beverage = item[1];
                                            it.food = item[2];
                                            it.Entrée = item[3];
                                            it.Serialnumber = item[4];
                                            parentsno = item[4];
                                            it.Sequencenumber = item[5];
                                            it.Parentserialnumber = item[6];
                                            it.Discount = item[7];
                                            if (!string.IsNullOrEmpty(item[8]))
                                            {
                                                it.Itemquantity = Convert.ToInt16(item[8]);
                                                its.metaInfo.totalOrderedItems = its.metaInfo.totalOrderedItems + Convert.ToInt16(item[8]);
                                                // totalitems = totalitems + Convert.ToInt16(item[8]);

                                            }
                                            it.positive = item[9];

                                            string pric = words[i].Substring(item[0].Length + 30, 8);
                                            it.Price = item[10] + item[11] + item[12] + item[13] + item[14] + item[15] + item[16];
                                            it.Price = words[i].Substring(item[0].Length + 30, 8) + "." + words[i].Substring(item[0].Length + 38, 2);
                                            it.description = words[i].Substring(64, (words[i].Length - 64));
                                            string[] de = it.description.Split(des, System.StringSplitOptions.RemoveEmptyEntries);
                                            it.description = de[0];
                                            its.metaInfo.Ordertax = de[1].Substring(0, 8)+"."+de[1].Substring(8, 2);
                                            its.metaInfo.Ordertotal = de[1].Substring(10, 9) + "." + de[1].Substring(19, 2);
                                               // its.metaInfo.dayUpSell_img_small = imgToByteArray(img1);
                                            //its.metaInfo.dayUpSellImage = imgToByteArray(img2);
                                            it.items = new List<subitems>();
                                            its.orderDetails.Add(it);
                                        }

                                    }


                                    else
                                    {
                                            if (its != null)
                                            {
                                                its.metaInfo.Ordertax = (words[i].Substring(38, 7));

                                                its.metaInfo.Ordertotal = (words[i].Substring(65, 6));
                                                its.metaInfo.dayUpSell_img_small = imgToByteArray(img1);
                                                its.metaInfo.dayUpSellImage = imgToByteArray(img2);
                                                its.metaInfo.totalOrderedItems = totalitems;
                                                totalitems = 0;
                                            }
                                    }
                                }
                                  }
                               }

                        string json = JsonConvert.SerializeObject(its);
                        // Console.WriteLine(json);
                        // string servedata =    TCPServer.Server(sender);
                        if (!string.IsNullOrEmpty(json))
                        {
                            File.WriteAllText(Logpath, json);
                            // using (StreamWriter wr = File.WriteAllText(Logpath, json))
                            // {

                            //     Log(json, wr);
                            // }
                            //// string text = "{Item:Bean Burrito,Qty:03,Price:597},{Item:7-Layer Burrito,Qty:01,Price:359}"; //Encoding.UTF8.GetString(decoded);
                           byte[] msg = EncodeMessageToSend(json);
                                // Console.WriteLine("{0}", msg);
                               stream.Write(msg, 0, msg.Length);

                        }

                        }
                    }
                 }
  

            }



            catch (Exception e)
            {
                Console.WriteLine(e.ToString());
            }

            Console.WriteLine("\n Press any key to continue...");
            Console.ReadKey();
        }

        private static string AppendText(string logpath)
        {
            throw new NotImplementedException();
        }

        public static void Log(string logMessage, TextWriter w)
        {


            w.WriteLine(logMessage);

        }

        public static Byte[] EncodeMessageToSend(String message)
        {
            Byte[] response;
            Byte[] bytesRaw = Encoding.UTF8.GetBytes(message);
            Byte[] frame = new Byte[10];

            Int32 indexStartRawData = -1;
            Int32 length = bytesRaw.Length;

            frame[0] = (Byte)129;
            if (length <= 125)
            {
                frame[1] = (Byte)length;
                indexStartRawData = 2;
            }
            else if (length >= 126 && length <= 65535)
            {
                frame[1] = (Byte)126;
                frame[2] = (Byte)((length >> 8) & 255);
                frame[3] = (Byte)(length & 255);
                indexStartRawData = 4;
            }
            else
            {
                frame[1] = (Byte)127;
                frame[2] = (Byte)((length >> 56) & 255);
                frame[3] = (Byte)((length >> 48) & 255);
                frame[4] = (Byte)((length >> 40) & 255);
                frame[5] = (Byte)((length >> 32) & 255);
                frame[6] = (Byte)((length >> 24) & 255);
                frame[7] = (Byte)((length >> 16) & 255);
                frame[8] = (Byte)((length >> 8) & 255);
                frame[9] = (Byte)(length & 255);

                indexStartRawData = 10;
            }

            response = new Byte[indexStartRawData + length];

            Int32 i, reponseIdx = 0;

            //Add the frame bytes to the reponse
            for (i = 0; i < indexStartRawData; i++)
            {
                response[reponseIdx] = frame[i];
                reponseIdx++;
            }

            //Add the data bytes to the response
            for (i = 0; i < length; i++)
            {
                response[reponseIdx] = bytesRaw[i];
                reponseIdx++;
            }

            return response;
        }
        //convert image to bytearray
        public static byte[] imgToByteArray(Image img)
        {
            using (MemoryStream mStream = new MemoryStream())
            {
                // MemoryStream temp = new MemoryStream();
                img.Save(mStream, img.RawFormat);
                return mStream.ToArray();
                // return temp.ToArray();
            }
        }

    }
    public class Items
    {
        public List<OrderItems> orderDetails { get; set; }
        public metadata metaInfo { get; set; }

    }
    public class OrderItems
    {
        public string modifier { get; set; }
        public string beverage { get; set; }
        public string food { get; set; }
        public string Entrée { get; set; }
        public string Serialnumber { get; set; }
        public string Sequencenumber { get; set; }
        public string Parentserialnumber { get; set; }
        public string Discount { get; set; }
        public int Itemquantity { get; set; }
        public string Price { get; set; }
        public string positive { get; set; }
        public string description { get; set; }
        public List<subitems> items { get; set; }

    }
    public class subitems
    {
        public string modifier { get; set; }
        public string beverage { get; set; }
        public string food { get; set; }
        public string Entrée { get; set; }
        public string Serialnumber { get; set; }
        public string Sequencenumber { get; set; }
        public string Parentserialnumber { get; set; }
        public string Discount { get; set; }
        public string Itemquantity { get; set; }
        public string Price { get; set; }
        public string positive { get; set; }
        public string description { get; set; }
        public List<minsubitems> items;

    }
    public class minsubitems
    {
        public string modifier { get; set; }
        public string beverage { get; set; }
        public string food { get; set; }
        public string Entrée { get; set; }
        public string Serialnumber { get; set; }
        public string Sequencenumber { get; set; }
        public string Parentserialnumber { get; set; }
        public string Discount { get; set; }
        public string Itemquantity { get; set; }
        public string Price { get; set; }
        public string positive { get; set; }
        public string description { get; set; }
        public List<subitems> items { get; set; }
    }
    public class metadata
    {
        public string Ordertax { get; set; }
        public string Ordertotal { get; set; }
        public int totalOrderedItems { get; set; }
       public byte[] dayUpSell_img_small { get; set; }
       public byte[] dayUpSellImage { get; set; }
    }
}
    
