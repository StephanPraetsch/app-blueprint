import {ClickCounter} from "./renderer/clickCounter.js";
import {Clock} from "./renderer/clock.js";
import {getRequiredElement} from "./renderer/dom.js";
import {incrementClickCount} from "./renderer/ipcClickCountGateway.js";

const currentTimeElement = getRequiredElement<HTMLElement>("current-time");
const clickOutputElement = getRequiredElement<HTMLElement>("click-output");
const clickCountButton = getRequiredElement<HTMLButtonElement>("click-count-button");

const clock = new Clock(currentTimeElement);
const clickCounter = new ClickCounter(clickCountButton, clickOutputElement, incrementClickCount);

clock.start();
clickCounter.start();
