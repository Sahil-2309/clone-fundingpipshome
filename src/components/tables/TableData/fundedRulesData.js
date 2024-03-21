const fundedRulesData = [
  {
    title: 'Trading Period',
    description:
      "We believe in constant adaptability and development when it comes to trading, therefore we do not have a minimum or maximum limit on trading days. You may take all the time you need. Remember, there's no need to rush. Take your time and trade at your own pace.",
    percentage: '∞',
    example: null,
  },
  {
    title: 'Maximum Daily Loss',
    description:
      'The Maximum Daily Loss is the amount you are allowed to lose every day. For the purpose of this rule, the higher value between equity and balance will be used. This rule is set as a % of the starting equity or balance of every day. The rule states that the equity of the day, which is the result of the currently floating PnL (Profit and Loss) in sum with all closed positions of that day must not hit the Maximum Daily Loss Limit.',
    percentage: '5%',
    example:
      "You have a funded account. At the start of day 5, your account balance is $105,000 and your equity is $107,000. The Daily Loss Limit is 5% from the starting equity for this example, this means that your equity on day 5 can't go lower than: Maximum Daily loss = $107,000 starting equity balance * 5% Daily Loss Limit = $5,350 Daily Loss Limit. $107,000 starting equity balance on day 5 - $5,350 Daily Loss Limit= $101,650. If your equity goes below $101,650 at any certain moment of time on day 5 your account will be closed.",
  },
  {
    title: 'Maximum Loss',
    description:
      "The Maximum Loss Limit is the amount your equity or balance can't go below. This rule is set to 10% of the initial account size. For example, if you have a $100,000 account and the Maximum Loss Limit is 10%, your equity or balance can't go below $90,000 at any moment.",
    percentage: '10%',
    example: null,
  },
  {
    title: 'Profit Target',
    description:
      'We do not have profit targets on the master account. You can request your profits on a 5 trading days basis directly from the beginning.',
    percentage: '-',
    example: null,
  },
  {
    title: 'Leverage',
    description:
      'Trade with up to 1:100 leverage with RAW Spreads. There is a different leverage applied for different types of financial instruments. FX 1:100 , Crypto 1:2, Indices 1:20, Metals 1:30 & Energies 1:10',
    percentage: '1:100',
    example: null,
  },
]

export default fundedRulesData
