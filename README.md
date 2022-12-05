# [War Games](https://tomkelly111.github.io/war-games/)

<img width="725" alt="image" src="https://user-images.githubusercontent.com/111172617/205503281-41a0e210-cf77-42a4-b259-2cb5291edfed.png">


[War Games](https://tomkelly111.github.io/war-games/) is a website which is optimsied for mobile and is intended to be an entertaining but easy to use game. The game uses minimilist design and clear images to ensure use of the game is as simple as possible. Features such as hiding the "Let's Battle!" button until the user has selected their weapon make sure there is no room for user error. The game also helpfully keeps track of games won and lost and provides the user with their current score.

## FEATURES

### Games Area
The games area displays 4 options for the user to select - rock, paper, scissors or random. There are no other clickable options and this is intentional to avoid any errors occuring. Once an option is selcted the option will display in the Battle Ground area.

### Battle Ground
In the Battle Ground the user's choice is displayed. Once the choice has been selected the play button appears displaying the text "Let's Battle!".


### Results Section
Once the user has clicked Let's Battle the scores are updated depending on who won.

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


CSS - No errors were returned when code was checked with the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/).

JAVASCRIPT - No errors were returned when code was checked with the official [JS Hint validator](https://jshint.com/).

Accessibility - I confirmed the code used is accessible by using lighthouse in devtools.

### Unfixed Bugs
It was discovered late in the development stages that the buttons do not display correctly on IOS devices. A fix was not discovered for this. Searching online shows that this is a known issue, a possible solution was found on https://stackoverflow.com/questions/47127201/webkit-appearance-none-not-working-for-button and this was implemented however it did not solve the issue. It was difficult to assess whether a fix had worked as it is necessary to push the changes to the repository, make sure the changes have been deployed to the published site and check the updated site on IOS devices. I do not have easy access to IOS devices so this issue remains unfixed as far as I am aware. 

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
- Colors were selected from the following site: https://mycolor.space/?hex=%2300452D&sub=1 

### Media
- Logo image was taken from the following site: https://www.flaticon.com/free-icons/rock-paper-scissors and is credited at the bottom of the page.
- Button icons are taken from the following site: https://fontawesome.com/
		



