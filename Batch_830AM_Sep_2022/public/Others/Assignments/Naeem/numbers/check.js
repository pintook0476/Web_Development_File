var num = 132;
            num = parseInt(num);
            var rev = 0;
            var temp = num;
            while(num > 0) 
            {
                var digit = num % 10;
                rev = (rev*10) + digit;
                num = num / 10;
                num  = parseInt(num);
                
                console.log(rev)
            }