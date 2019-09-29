import {ALIGNMENT_ANY, BadgeType, IBadgeData} from "coh-content-db";

export const ThePerfectHacker: IBadgeData = {
    type: BadgeType.EVENT,
    key: "the-perfect-hacker",
    names: [
        {value: "The Perfect Hacker"},
    ],
    alignment: ALIGNMENT_ANY,
    badgeText: [
        {value: "You performed the role of the Hacker in the Summer Blockbuster 'Casino Heist' perfectly."},
    ],
    acquisition: "In the Summer Blockbuster, perform the role of the Hacker perfectly.",
    notes: "Awarded to all team-members.\n" +
        "\n" +
        "# Walkthrough\n" +
        "Click the three computer terminals while not killing the patrol wandering through the room.\n" +
        "\n" +
        "A character with high defense may be able to click the terminals while under fire, others should try to use stealth and timing.",
    links: [
        {title: "The Perfect Hacker Badge", href: "https://paragonwiki.com/wiki/The_Perfect_Hacker_Badge"}
    ],
    imageKeys: [{value: "core.event.the-perfect-hacker"}]
};
