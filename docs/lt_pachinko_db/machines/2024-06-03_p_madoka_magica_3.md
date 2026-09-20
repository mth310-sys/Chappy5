# P 魔法少女まどか☆マギカ3

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: P 魔法少女まどか☆マギカ3
manufacturer: 京楽産業.
releaseDate: 2024-06-03
modelType: ライトミドル
gameType: 1種2種混合 / STタイプ / ラッキートリガー搭載
jackpotProbability:
- 通常時: 約1/199.9
- 右打ち中: 約1/62.2
initialPayout:
- 4R: 約400個（払出。資料により非RUSH4Rを約450個表記するものあり。定義/アタッカー差を混同しない）
- 10R: 約1500個（払出）
rushEntryRate: 55%（アルティメット超RUSH直行1%を含む。通常マギカRUSHは54%）
rushContinuationRate: マギカRUSH 約65%（ST60回+残保留4個）
ltName: アルティメット超RUSH
ltEntryRoute:
- 通常時10R当りの1%からLT直行
- マギカRUSH中の大当り約50%でワルプルギスの夜BONUS → バトル勝利約55%でLT発動
ltEntryRate:
- 初当り直行: 1%
- マギカRUSH中: 大当り約50%でワルプルギスの夜BONUS、その約55%勝利でLT（1回のRUSH中大当り当選時ベースでは約27.5%相当だが、DBでは公表要素を分離保存し、初当り基準の総到達率としては扱わない）
ltContinuationRate: 約87%（ST120回+残保留4個）
ltPayoutStructure: アルティメット超RUSH中の大当りは10R約1500個 100%
totalPayoutDistribution:
- 特図1: 10R約1500個+LT 1% / 4R約400個+マギカRUSH 54% / 4R通常 45%
- マギカRUSH中: 10R約1500個 100%。約50%がワルプルギスの夜BONUS、勝利でLT、敗北でマギカRUSH継続
- LT中: 10R約1500個 100%
timeShortening: マギカRUSH 60回+残保留4個 / アルティメット超RUSH 120回+残保留4個
cTimeOrSpecialSystems: なし（LT到達はワルプルギスの夜BONUS勝利または初当り1%直行）
ceilingOrSupport: 遊タイム非搭載
gameFlow: |
  通常時（約1/199.9）
   ↓ 初当り
  45% 通常 / 54% マギカRUSH / 1% アルティメット超RUSH直行
   ↓ マギカRUSH（60回+残保留4、約65%）
  大当りの約50%でワルプルギスの夜BONUS
   ↓ 勝利約55%
  LT「アルティメット超RUSH」（120回+残保留4、約87%、右打ちALL約1500個）
   ↓ 駆け抜け
  通常時
notes:
- 新枠ベルーガ採用の初期LT機。
- 右打ち中はALL約1500個。
- LT突入経路の「50%×55%」は各公表要素の構造説明であり、初当り基準のLT総到達率として推測登録しない。
sources:
- https://news.p-world.co.jp/articles/27565 — アミューズメントジャパン/P-WORLD転載。LT搭載、約1/199、右ALL1500、下位約65%→LT約87%、2024-06-03導入予定。
- https://news.p-world.co.jp/articles/27778/greenbelt — グリーンべると/P-WORLD転載。約1/199.9、初当り54%マギカRUSH、ST60+4、右当り約50%でワルプルギスの夜BONUS、LT ST120+4、ALL1500。
- https://p.hisshobon.jp/machine/4309/1/102109 — パチ&スロ必勝本。通常1/199.9、右1/62.2、RUSH突入55%、下位約65%、LT約87%、払出400/1500、LT搭載、遊タイム非搭載、導入日。
- https://www.atari7.com/pachinko/p-madokamagica3.php — アタリ7。特図1 45/54/1%、ワルプルギス発生約50%、勝率約55%、LT中10R1500 100%を照合。
confidence: ANALYSIS_HIGH
missingFields: []
conflicts: []
