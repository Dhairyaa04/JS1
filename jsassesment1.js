/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
let NFTContainer = [];
// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name , UID ,Section , Branch , CGPA , BLOCK , level) {
    let NFT = {
        name: name,
        UID: UID,
        Section: Section,
        Branch: Branch,
        CGPA: CGPA,
        BLOCK: BLOCK,
        level: level
    }
    NFTContainer.push(NFT);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < NFTContainer.length; i++) {
        console.log("\n\n_____________________ STUDENT DETAILS  _________________________\n\n" );
        console.log("Name: " + NFTContainer[i].name);
        console.log("UID: " + NFTContainer[i].UID);
        console.log("Section: " + NFTContainer[i].Section);
        console.log("Branch: " + NFTContainer[i].Branch);
        console.log("CGPA: " + NFTContainer[i].CGPA);
        console.log("Block: " + NFTContainer[i].BLOCK);
        console.log("Level: " + NFTContainer[i].level);
        console.log("\n\n_____________________* * * * *_________________________\n" );
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs  " + NFTContainer.length);

}

// call your functions below this line
mintNFT("Dhairyaa", 15785, 720, "CSE",8, "B", 1);
mintNFT("RIYA", 15783, 728, "CSE",8, "B", 3);
mintNFT("Manyaaa", 16785, 721, "CSE",9, "B", 1);
mintNFT("monika", 15985,678, "CSE",8, "B", 9);
listNFTs();
getTotalSupply();
