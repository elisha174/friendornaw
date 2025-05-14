const usernames = [
    'pwallington0',
    'jserrier1',
    'ssteely2',
    'dbraithwait3',
    'fwagg4',
    'vparadine5',
    'rrevens6',
    'jdoddridge7',
    'vweinham8',
    'wsallier9',
    'lkurdani0',
    'jogger1',
    'sphelp2',
    'bshankland3',
    'vrowlstone4',
    'dtout5',
    'btooke6',
    'hpanton7',
    'cgeator8',
    'khaestier9',
    ``,
];
const emails = [
    'mlesor0@imgur.com',
    'overbruggen1@fc2.com',
    'bnears2@google.com',
    'egavan3@cmu.edu',
    'sdashper4@mac.com',
    'wosheeryne5@sphinn.com',
    'jbaseggio6@auda.org.au',
    'yperkins7@clickbank.net',
    'mmacgeffen8@theguardian.com',
    'adadswell9@mashable.com',
    'smilbank0@cdc.gov',
    'djanoschek1@yellowpages.com',
    'fgoodisson2@aboutads.info',
    'dlumsdaine3@altervista.org',
    'sclemenzo4@myspace.com',
    'dfossitt5@woothemes.com',
    'ecolin6@sciencedaily.com',
    'lrudolph7@nationalgeographic.com',
    'jpegden8@newsvine.com',
    'ehaylett9@omniture.com',
    '',
];
const thoughts = [
    'Operative encompassing hardware',
    'Seamless clear-thinking hierarchy',
    'Business-focused bottom-line moratorium',
    'Profit-focused bottom-line algorithm',
    'Inverse radical functionalities',
    'Diverse asymmetric throughput',
    'Fully-configurable heuristic portal',
    'Configurable client-server encryption',
    'Streamlined 4th generation migration',
    'Sharable bottom-line protocol',
    'Pre-emptive user-facing database',
    'Proactive actuating hierarchy',
    'Robust secondary secured line',
    'Profound fault-tolerant neural-net',
    'Open-architected reciprocal support',
    'Multi-layered static access',
    'Seamless radical success',
    'Fully-configurable systematic adapter',
    'Organized interactive middleware',
    'Reverse-engineered modular array',
    '',
];
const reactions = [
    'ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien',
    'mi nulla ac enim in tempor turpis',
    'massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh',
    'turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget',
    'ipsum primis in faucibus orci luctus et',
    'dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem',
    'blandit ultrices enim lorem ipsum dolor sit amet consectetuer adipiscing elit proin interdum mauris',
    'convallis duis consequat dui nec nisi volutpat eleifend donec ut',
    'lectus pellentesque eget nunc donec',
    'risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl',
    'vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus',
    'varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper',
    'diam cras pellentesque volutpat dui maecenas tristique est et tempus',
    '',
];
const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);
// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
// Gets a random username
const getRandomUserName = () => `${getRandomArrItem(usernames)}`;
// Gets a random email
const getRandomEmail = () => `${getRandomArrItem(emails)}`;
// Gets a random email
const getRandomThoughts = () => `${getRandomArrItem(thoughts)}`;
const getRandomWord = () => `${reactions[genRandomIndex(reactions)]}`;
// Function to generate random comments given a number (ex. 10 comments === getRandomComments(10))
const getRandomReactions = (words) => {
    let post = '';
    for (let i = 0; i < words; i++) {
        post += ` ${getRandomWord()}`;
    }
    return post;
};
export { genRandomIndex, getRandomUserName, getRandomEmail, getRandomThoughts, getRandomReactions };
