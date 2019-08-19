const data = (start, end) => [
  {
    type: "start",
    timestamp: 1519780251293,
    select: ["min_response_time", "max_response_time"],
    group: ["os", "browser"]
  },
  {
    type: "span",
    timestamp: 1519780251293,
    begin: start,
    end: end
  },
  {
    type: "data",
    timestamp: 1519780251000,
    os: "linux",
    browser: "chrome",
    min_response_time: (Math.random(0) * 1).toFixed(1),
    max_response_time: (Math.random(0) * 3).toFixed(1)
  },
  {
    type: "data",
    timestamp: 1519780251000,
    os: "mac",
    browser: "chrome",
    min_response_time: (Math.random(0) * 1).toFixed(1),
    max_response_time: (Math.random(0) * 3).toFixed(1)
  },
  {
    type: "data",
    timestamp: 1519780251000,
    os: "mac",
    browser: "firefox",
    min_response_time: (Math.random(0) * 1).toFixed(1),
    max_response_time: (Math.random(0) * 3).toFixed(1)
  },
  {
    type: "data",
    timestamp: 1519780251000,
    os: "linux",
    browser: "firefox",
    min_response_time: (Math.random(0) * 1).toFixed(1),
    max_response_time: (Math.random(0) * 3).toFixed(1)
  },
  {
    type: "data",
    timestamp: 1519780251000,
    os: "linux",
    browser: "chrome",
    min_response_time: (Math.random(0) * 1).toFixed(1),
    max_response_time: (Math.random(0) * 3).toFixed(1)
  },
  {
    type: "data",
    timestamp: 1519780251000,
    os: "mac",
    browser: "chrome",
    min_response_time: (Math.random(0) * 1).toFixed(1),
    max_response_time: (Math.random(0) * 3).toFixed(1)
  },
  {
    type: "data",
    timestamp: 1519780251000,
    os: "mac",
    browser: "firefox",
    min_response_time: (Math.random(0) * 1).toFixed(1),
    max_response_time: (Math.random(0) * 3).toFixed(1)
  },
  {
    type: "data",
    timestamp: 1519780251000,
    os: "linux",
    browser: "chrome",
    min_response_time: (Math.random(0) * 1).toFixed(1),
    max_response_time: (Math.random(0) * 3).toFixed(1)
  },
  { type: "stop", timestamp: 17827802661253 }
];


export default data;
