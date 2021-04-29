var count = 0;
console.log("Hi");
var cards = document.getElementById('card');
var agent = document.querySelector('.agent');
var cardImg = document.querySelectorAll('#card img');
var agentName = document.querySelector('.name');
var roles = document.querySelectorAll('.role');
var details = document.querySelectorAll('#card p');
var abilityNames = document.querySelectorAll('.specify h2');
var info = [
    {
        agent: 'phoenix',
        name: 'PHOENIX',
        role: 'Duelist',
        bio: `Hailing from the U.K., Phoenix's star power shines through in his fighting style, igniting the
        battlefield with flash and flare. Whether he's got backup or not, he'll rush into a fight on his
        own terms.`,
        ability1: {
            abilityName: 'Curveball',
            abilityInfo: `EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to
            curve the flare orb to the left, detonating and blinding any player who sees the orb.
            ALTERNATE FIRE to curve the flare orb to the right.`
        },
        ability2: {
            abilityName: 'Hot Hands',
            abilityInfo: `EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or
        upon hitting the ground, creating a lingering fire zone that damages enemies.`
        },
        ability3: {
            abilityName: 'Blaze',
            abilityInfo: `EQUIP a flame wall. FIRE to create a line of flame that moves forward, creating a wall of
        fire that blocks vision and damages players passing through it. HOLD FIRE to bend the
        wall in the direction of your crosshair.`},
        ability4: {
            abilityName: 'Run It Back',
            abilityInfo: `INSTANTLY place a marker at Phoenix’s location. While this ability is active, dying or
        allowing the timer to expire will end this ability and bring Phoenix back to this
        location with full health.`}
    },
    {
        agent: 'jett',
        name: 'JETT',
        role: 'Duelist',
        bio: `Representing her home country of South Korea, Jett's agile and evasive fighting style lets her
        take risks no one else can. She runs circles around every skirmish, cutting enemies before they
        even know what hit them.`,
        ability1: {
            abilityName: 'Updraft',
            abilityInfo: `INSTANTLY propel Jett high into the air.`
        },
        ability2: {
            abilityName: 'Tailwind',
            abilityInfo: `INSTANTLY propel Jett in the direction she is moving. If Jett is standing still, she will
        propel forward.`},
        ability3: {
            abilityName: 'Cloudburst',
            abilityInfo: `INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact
        with a surface. HOLD the ability key to curve the smoke in the direction of your
        crosshair.`},
        ability4: {
            abilityName: 'Blade Strom',
            abilityInfo: `EQUIP a set of highly accurate knives that recharge on killing an opponent. FIRE to throw
        a single knife at your target. ALTERNATE FIRE to throw all remaining daggers at your
        target.`}
    },
    {
        agent: 'omen',
        name: 'OMEN',
        role: 'Controller',
        bio: `A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the
        field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.`,
        ability1: {
            abilityName: 'Paranoia',
            abilityInfo: `INSTANTLY fire a shadow projectile forward, briefly reducing the vision range of all
        players it touches. This projectile can pass straight through walls.`},
        ability2: {
            abilityName: 'Dark Cover',
            abilityInfo: `EQUIP a shadow orb and see its range indicator. FIRE to throw the shadow orb to the
        marked location, creating a long-lasting shadow sphere that blocks vision. HOLD
        ALTERNATE FIRE while targeting to move the marker further away. HOLD the ability key
        with targeting to move the market closer..`},
        ability3: {
            abilityName: 'Shrouded Step',
            abilityInfo: `EQUIP a shadow walk ability and see its range indicator. FIRE to begin a brief channel,
        then teleport to the marked location.`},
        ability4: {
            abilityName: 'From The Shadow',
            abilityInfo: `EQUIP a tactical map. FIRE to begin teleporting to the selected location. While
        teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel his
        teleport.`}
    },
    {
        agent: 'cypher',
        name: 'CYPHER',
        role: 'Sentinel',
        bio: `The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.`,
        ability1: {
            abilityName: 'CYBER CAGE',
            abilityInfo: `INSTANTLY toss the cyber cage in front of Cypher. Activate to create a zone that blocks vision and slows enemies who pass through it.`
        },
        ability2: {
            abilityName: 'SPYCAM',
            abilityInfo: `EQUIP a spycam. FIRE to place the spycam at the targeted location. RE-USE this ability to take control of the camera’s view. While in control of the camera, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.`
        },
        ability3: {
            abilityName: 'TRAPWIRE',
            abilityInfo: `EQUIP a trapwire. FIRE to place a destructible and covert tripwire at the targeted location creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED.`
        },
        ability4: {
            abilityName: 'NEURAL THEFT',
            abilityInfo: `INSTANTLY use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.`
        }
    }
]
function onNext() {
    count++;
    if ((count >= 0) && (count < info.length)) {
        agent.classList.remove(info[count - 1].agent);
        agent.classList.add(info[count].agent);
        cardImg[0].src = "./images/" + info[count].agent + "/Q.png";
        cardImg[1].src = "./images/" + info[count].agent + "/E.png";
        cardImg[2].src = "./images/" + info[count].agent + "/C.png";
        cardImg[3].src = "./images/" + info[count].agent + "/X.png";
        cardImg[4].src = "./images/" + info[count].agent + "/Q.png";
        cardImg[5].src = "./images/" + info[count].agent + "/E.png";
        cardImg[6].src = "./images/" + info[count].agent + "/C.png";
        cardImg[7].src = "./images/" + info[count].agent + "/X.png";
        agentName.innerHTML = info[count].name;
        roles[0].innerHTML = info[count].role;
        roles[1].innerHTML = info[count].role.toUpperCase();
        details[0].innerHTML = info[count].bio;
        details[1].innerHTML = info[count].ability1.abilityInfo;
        details[2].innerHTML = info[count].ability2.abilityInfo;
        details[3].innerHTML = info[count].ability3.abilityInfo;
        details[4].innerHTML = info[count].ability4.abilityInfo;
        abilityNames[0].innerHTML = "Q-" + info[count].ability1.abilityName;
        abilityNames[1].innerHTML = "E-" + info[count].ability2.abilityName;
        abilityNames[2].innerHTML = "C-" + info[count].ability3.abilityName;
        abilityNames[3].innerHTML = "X-" + info[count].ability4.abilityName;

    } else {
        count = info.length - 1;
    }
}
function onPrev() {
    count--;
    console.log(count);
    if ((count >= 0) && (count < info.length)) {
        agent.classList.remove(info[count + 1].agent);
        agent.classList.add(info[count].agent);
        cardImg[0].src = "./images/" + info[count].agent + "/Q.png";
        cardImg[1].src = "./images/" + info[count].agent + "/E.png";
        cardImg[2].src = "./images/" + info[count].agent + "/C.png";
        cardImg[3].src = "./images/" + info[count].agent + "/X.png";
        cardImg[4].src = "./images/" + info[count].agent + "/Q.png";
        cardImg[5].src = "./images/" + info[count].agent + "/E.png";
        cardImg[6].src = "./images/" + info[count].agent + "/C.png";
        cardImg[7].src = "./images/" + info[count].agent + "/X.png";
        agentName.innerHTML = info[count].name;
        roles[0].innerHTML = info[count].role;
        roles[1].innerHTML = info[count].role.toUpperCase();
        details[0].innerHTML = info[count].bio;
        details[1].innerHTML = info[count].ability1.abilityInfo;
        details[2].innerHTML = info[count].ability2.abilityInfo;
        details[3].innerHTML = info[count].ability3.abilityInfo;
        details[4].innerHTML = info[count].ability4.abilityInfo;
        abilityNames[0].innerHTML = info[count].ability1.abilityName;
        abilityNames[1].innerHTML = info[count].ability2.abilityName;
        abilityNames[2].innerHTML = info[count].ability3.abilityName;
        abilityNames[3].innerHTML = info[count].ability4.abilityName;
    } else {
        count = 0;
    }
}
