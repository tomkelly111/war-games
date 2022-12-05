# [War Games](https://tomkelly111.github.io/war-games/)

<img width="596" alt="image" src="https://user-images.githubusercontent.com/111172617/205729930-8afe3640-d974-4e21-8f2b-0b9008fd3508.png">


[War Games](https://tomkelly111.github.io/war-games/) is a website which is optimsied for mobile and is intended to be an entertaining but easy to use game. The game uses minimilist design and clear images to ensure use of the game is as simple as possible. Features such as hiding the "Let's Battle!" button until the user has selected their weapon make sure there is no room for user error. The game also helpfully keeps track of games won and lost and provides the user with their current score.

## FEATURES

### Games Area
The games area displays 4 options for the user to select - rock, paper, scissors or random. There are no other clickable options and this is intentional to avoid any errors occuring. Once an option is selcted the option will display in the Battle Ground area.

<img width="264" alt="image" src="https://user-images.githubusercontent.com/111172617/205730031-6e7dfb04-5712-4d2b-b0e1-8697a581f1ce.png">


### Battle Ground
In the Battle Ground the user's choice is displayed. Once the choice has been selected the play button appears displaying the text "Let's Battle!".

<img width="202" alt="image" src="https://user-images.githubusercontent.com/111172617/205730097-315820c7-27f5-4c89-929e-53c91741cfaa.png">

### Results Section
Once the user has clicked Let's Battle the scores are updated depending on who won. This section will move depending on the width of the device used.

<img width="175" alt="image" src="https://user-images.githubusercontent.com/111172617/205730279-8eab7b21-7ea7-4243-be37-25e5b268102f.png">


### Footer
The footer details the rules of the game and credit for the logo.

<img width="366" alt="image" src="https://user-images.githubusercontent.com/111172617/205739950-109b9903-5672-4b3f-9114-aef2f4d80226.png">

### Javascript
The Javascript code for War Games contains comments explaining the process and functions used. The key code is contained in the checkWinner() function. This checks the user's choice against the computer's randomly generated selection using a series of "if else" statements. Initially I attempted to minimise the use of "if else" statements by using a mathematic formula, however I decided against this as a I could not come up with a workable solution due to the circular dependencies of the winner. i.e. rock < paper < scissors < rock...

## TESTING

### Manual Testing
<table>  
            <tr>
              <th>Action</th>
              <th>Expected Behaviour</th>
              <th>Pass / Fail </th>
            </tr>
            <tr>
              <td>Clicking each rock paper or scissors weapon option</td>
              <td>Displays rock paper or scissors in Battle Ground area</td>
              <td>Pass</td>
            </tr>
            <tr>
              <td>Clicking random weapon option</td>
              <td>Displays randomly generated option of rock, paper or scissors in Battle Ground area</td>
              <td>Pass</td>
            </tr>
            <tr>
              <td>Clicking random weapon option</td>
              <td>Let's Battle button appears</td>
              <td>Pass</td>
            </tr>
            <tr>
              <td>Clicking Let's Battle</td>
              <td>A random choice of rock, paper or scissors is displayed for the computer</td>
              <td>Pass</td>
            </tr>
            <tr>
              <td>Clicking Let's Battle</td>
              <td>Text displays a winning, losing or tie message</td>
              <td>Pass</td>
            </tr>
            <tr>
              <td>Clicking Let's Battle</td>
              <td>Let's Battle! button dissapears</td>
              <td>Pass</td>
            </tr>
            <tr>
              <td>Clicking Let's Battle</td>
              <td>User score increases by 1 when they win</td>
              <td>Pass</td>
            </tr>
            <tr>
              <td>Clicking Let's Battle</td>
              <td>Computer score increases by 1 when computer wins</td>
              <td>Pass</td>
            </tr>
            <tr>
              <td>Choosing new weapon</td>
              <td>Winning/losing/tie message disappears</td>
              <td>Pass</td>
            </tr>        
</table>

### User Testing
The website link was provided to four users all of whom were able to use the game easily and understood how to play. One issue raised by two of the users was that they thought when they clicked the random option, the question mark that displayed on the right hand side was their random selection. To avoid this issue headings were added ("YOU" and "COMPUTER") to make this clearer and the question mark under the computer heading was changed to a computer image.


### Validator Testing

HTML - No errors were returned when code was checked with the official [W3C validator](https://validator.w3.org/).

<img width="891" alt="image" src="https://user-images.githubusercontent.com/111172617/205738984-92fb21f6-46ca-44c0-b7b9-ee769721a168.png">

CSS - No errors were returned when code was checked with the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/).

<img width="902" alt="image" src="https://user-images.githubusercontent.com/111172617/205739164-c4bb6321-f9cd-4a7d-880d-b81f994d2b99.png">

JAVASCRIPT - No errors were returned when code was checked with the official [JS Hint validator](https://jshint.com/).

<img width="299" alt="image" src="https://user-images.githubusercontent.com/111172617/205739254-c6ea7a10-5c1a-4783-a2fd-5eb5f62b6bdc.png">

Accessibility - I confirmed the code used is accessible by using lighthouse in devtools.

<img width="242" alt="image" src="https://user-images.githubusercontent.com/111172617/205739456-9e758c90-db96-4591-aca8-7759ddb60c43.png">

### Unfixed Bugs
It was discovered late in the development stages that the buttons do not display correctly on IOS devices. A fix was not discovered for this. Searching online shows that this is a known issue, a possible solution was found on https://stackoverflow.com/questions/47127201/webkit-appearance-none-not-working-for-button and this was implemented however it did not solve the issue. Instead I opted to replace the button elements with divs and this appears to have solved the issue.

The rules of the game and the footer do not sit at the bottom of the page on tablet devices.

## DEPLOYMENT
### Publication
In order to publish the site, deployment was carried out using GitHub pages. In order to deploy the site the following steps were followed:
- Open the GitHub repository
- Navigate to the "settings" tab
- On the left hand side of the page scroll down and select "pages" 
- Under "source" select "deploy from a branch"
- Under "branch" select "main"
- Click "save"
- The live link is: https://tomkelly111.github.io/war-games/

### Local Deployment
In order to deploy the site locally a user can enter "git clone https://tomkelly111.github.io/war-games/" into the command prompt on their computer and hit enter.

## CREDITS

### Color
- Colors were selected from the following site: https://mycolor.space/

### Media
- Logo image was taken from the following site: https://www.flaticon.com/free-icons/rock-paper-scissors and is credited at the bottom of the page.
- User choice icons were taken from the following site: https://fontawesome.com/
		



