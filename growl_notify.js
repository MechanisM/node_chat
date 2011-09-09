function register(){
            this.growl_registered = true;
            var application = new Growl.Application();
            application.name = "NodeChat";
            application.icon = "nodechat.ico";
            
            var notificationTypes = new Array();
            var nt1 = new Growl.NotificationType();
            nt1.name = "NT1";
            nt1.displayName = "Example Notification One";
            nt1.enabled = true;
            notificationTypes.push(nt1);
            
            Growl.register(application, notificationTypes);
        }
        
        function notify(chat_user, chat_text){
            var notification = new Growl.Notification();
            notification.name = "NT1";
            notification.title = chat_user;
            notification.text = chat_text
            notification.icon = "nodechat.ico";
            notification.priority = "normal";
            
            Growl.notify("NodeChat", notification);
        }

        window.onload = function(){
            var config = {};
            //config.scope = "Growl"; //optional
            //config.containerID = null; //optional

            //config.password = "secret";

            //config.passwordHashAlgorithm = Growl.PasswordHashAlgorithm.SHA1;
            //config.passwordHashAlgorithm = Growl.PasswordHashAlgorithm.SHA256;

            //config.encryptionAlgorithm = Growl.EncryptionAlgorithm.PlainText;
            //config.encryptionAlgorithm = Growl.EncryptionAlgorithm.DES;
            //config.encryptionAlgorithm = Growl.EncryptionAlgorithm.TripleDES;
            //config.encryptionAlgorithm = Growl.EncryptionAlgorithm.AES;

            config.oncallback = cb;
            config.onerror = onerror;
            Growl.init(config);
        }
        
        function cb(notificationID, action, context, type, timestamp){
            //if(action == Growl.CallbackAction.Click) alert("the notification was clicked");

            var s = "";
            s += "id: " + notificationID + "\r\n";
            s += "action: " + action + "\r\n";
            s += "context: " + context + "\r\n";
            s += "type: " + type + "\r\n";
            s += "timestamp: " + timestamp + "\r\n";
            alert(s);
        }
        
        function onerror(errorCode, errorDescription){
          if (errorCode == 401)
            return;
          alert("ERROR:\r\n\r\n" + errorCode + " - " + errorDescription);
        }