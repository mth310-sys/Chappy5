# P にゃんこ大戦争 多様性のネコ

machineName: P にゃんこ大戦争 多様性のネコ
manufacturer: 京楽産業.
releaseDate: 2024-11-18
modelType: ライトミドル相当 / LT搭載
gameType: 一種二種混合 / 転落型LT / 下位RUSHなし
jackpotProbability: 通常時は「降臨ガチャ」発生 約1/155（詳細解析では約1/155.4）。神域ULTIMATE中図柄揃い 約1/26.4、終了図柄 約1/155
initialPayout: 降臨ガチャ成功時はSUNRISE BONUS 10R×2回＝払出約3000個。降臨ガチャ失敗時は2R相当の払出約300個（資料に実射約375個表記もあり、定義を分離）
rushEntryRate: 下位RUSHなし。降臨ガチャ約1/155の約25%でSUNRISE BONUS、その後約50%（残保留4個の引き戻し約14.3%込み）でLT「神域ULTIMATE」
rushContinuationRate: 通常RUSHなし
ltName: 神域ULTIMATE
ltEntryRoute: 通常時 → 約1/155の降臨ガチャ → 演出成功約25% → SUNRISE BONUS（1500個×2＝3000個払出） → SUNRISE JUDGEMENT成功約50%（残保留引き戻し込み） → LT「神域ULTIMATE」
ltEntryRate: 降臨ガチャ発生を基準に約12.5%（約25%×約50%という経路構造。解析資料の初回振り分けもRUSH突入約12.5%）。通常時1変動あたりのLT到達確率は公式/業界の直接公表値を確認できていないため逆算値を確定値として保存しない
ltContinuationRate: 約88%。約1/155の終了図柄を引くまでの継続期待値と、RUSH終了時残保留4個の引き戻し約14.3%の合算
ltPayoutStructure: 神域ULTIMATE中の図柄揃いはALL 10R・払出1500個。公式はRUSH中3000個（1500個×2）のプレミアム演出も案内するが、単発図柄揃いの基本払出は1500個
totalPayoutDistribution: 解析資料では初回=10R×2＋LT約12.5%、10R×2＋非LT約12.5%、2R＋非LT約75%。右打ち図柄揃い=10R 1500個・LT継続100%
timeShortening: 神域ULTIMATEは大当りまたは終了図柄当選まで。終了図柄当選後は残保留最大4個で引き戻し抽選
cTimeOrSpecialSystems: 転落型。神域ULTIMATE図柄揃い約1/26.4、終了図柄約1/155。残保留4個引き戻し約14.3%をLT突入/継続の公表TOTAL値に含む
ceilingOrSupport: 遊タイム非搭載

gameFlow: 通常時 → 降臨ガチャ約1/155 → 約25%成功でSUNRISE BONUS 3000個 → 約50%のSUNRISE JUDGEMENT成功でLT「神域ULTIMATE」 → 図柄揃い約1/26.4 vs 終了図柄約1/155の転落型 → 図柄揃いはALL1500個で継続 → 終了図柄後も残保留4個で引き戻せばLT復帰、失敗で通常へ
notes: メーカー公式が「ラッキートリガー搭載」「下位RUSHを介さず神域ULTIMATEへ直行」「約88%・ALL1500個」を明示。約50%および約88%は残保留4個の引き戻しを含むTOTAL定義。2026年の「神さまにおまかせ88ver.」とは別スペックで混同しない。
sources:
- https://www.kyoraku.co.jp/news/detail/790 — KYORAKU公式。2024-11-18全国導入、LT搭載、神域ULTIMATE、約88%、ALL1500個、3000個=1500個×2、継続率定義
- https://hisshobon.com/machineinfo/94159/ — 必勝本。1種2種混合、降臨ガチャ約1/155・成功約25%、LT約50%、図柄揃い約1/26.4、終了約1/155、遊タイム非搭載、払出
- https://hisshobon.com/machineinfo/94161/ — 必勝本。LT発動経路、SUNRISE BONUS後約50%、終了後残保留の処理
- https://1geki.jp/pachinko/p_nyankod_tn/ — 一撃。基本確率、成功率、LT継続、払出/実獲得定義の照合
- https://pachinko-curation.com/50326/ — ぱちんこキュレーション。型式Pにゃんこ大戦争～多様性のネコ～M4、初回約12.5/12.5/75振り分けの照合
retrievedAt: 2026-09-21
confidence: OFFICIAL + ANALYSIS_HIGH
status: COMPLETE_CORE
missingFields: 通常時1変動基準のLT到達確率について直接公表値は未確認。経路の積算を公表値として扱わない
conflicts: 主要スペック競合なし。降臨ガチャ失敗時の「払出300個」と「実射約375個」は測定/表記定義が異なるため競合扱いせず分離
