$searcher = [adsisearcher]"(samaccountname=$env:USERNAME)";
$email = $searcher.FindOne().Properties.mail.ToLower();
$password = "jibberish";


$pathToChrome = 'C:\Program Files (x86)\Google\Chrome\Application'
$tempFolder = '--user-data-dir=c:\temp'
$startPosition = '--window-position=1200,0'
$startPage = "http://localhost:3000/login?email=$email&password=$password"

cd $pathToChrome

.\chrome.exe --app=$startPage --window-size=320,700 
