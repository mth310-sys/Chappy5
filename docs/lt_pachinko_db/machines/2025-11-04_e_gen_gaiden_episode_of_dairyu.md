# e源外伝 EPISODE OF -大龍-

status: COMPLETE_CORE
retrievedAt: 2026-09-23

machineName: e源外伝 EPISODE OF -大龍-
manufacturer: 三洋物産
modelName: e源外伝EHLG
releaseDate: 2025-11-04
modelType: スマパチ / ライトミドル / LT3.0プラス / 超WIDE
gameType: 一種二種混合 / 二段階RUSH / 転落タイプ

jackpotProbability:
- 通常時大当り: 約1/199.8
- 右打ち中当選: 約1/53.2（大当り約1/199.8＋小当り約1/72.6の合算）
- BREAKING BATTLE中転落小当り: 約1/21.1
- EXTRA BATTLE中転落小当り: 約1/239.5

initialPayout:
- 特図1: 2R 約300個（払出）100%

rushEntryRate:
- BREAKING BATTLE突入率: 25%

rushContinuationRate:
- BREAKING BATTLEは継続RUSHというよりLTチャレンジ区間。
- 参戦人数/保障バトル回数別LT突破期待度（残保留4個込み）: 1回 約33.6% / 2回 約52.5% / 3回 約66.0%
- 参戦人数振り分けは解析資料で1人20% / 2人40% / 3人40%を確認。

ltName: EXTRA BATTLE
ltEntryRoute:
- 通常初当りの25%でBREAKING BATTLEへ。
- 通常時7図柄揃いはBREAKING BATTLE直行。その他の初当りはBONUS後の10 COUNT JUDGE成功でBREAKING BATTLEへ突入。
- BREAKING BATTLEで転落小当りを引く前に右打ち当選し、バトルに1回でも勝利すると10R約1500個を経てLT「EXTRA BATTLE」へ100%移行。

ltEntryRate:
- BREAKING BATTLE突入率: 初当りの25%
- BREAKING BATTLEからLTへの突破期待度（残保留4個込み）: 1バトル約33.6% / 2バトル約52.5% / 3バトル約66.0%
- 通常遊技全体基準の総LT到達率/確率は、公式・業界・複数解析を表記違いで再探索したが直接公表値を確認できず UNVERIFIED_AFTER_RESEARCH。25%と条件別突破率から独自合算しない。

ltContinuationRate:
- EXTRA BATTLE: 約86.5%（業界表記では約87%に丸め）
- 転落小当り約1/239.5を引くまでの継続期待値と、RUSH終了後の残保留4個での引き戻し約7.3%を合算した公表値。EXTRA BONUS∞を含む。

ltPayoutStructure:
- 10R 約1500個 + EXTRA BONUS∞（次回大当り濃厚）: 20%
- 10R 約1500個 + EXTRA BATTLE継続: 80%
- LT中大当りはALL約1500個。

totalPayoutDistribution:
- 特図1: 2R約300個 + BREAKING BATTLE 25% / 2R約300個 + 通常 75%
- BREAKING BATTLE中 特図2: 10R約1500個 + EXTRA BATTLE 100%
- EXTRA BATTLE中 特図2: 10R約1500個 + 次回大当り濃厚20% / 10R約1500個 + EXTRA BATTLE継続80%

timeShortening:
- BREAKING BATTLE: 時短10000回相当、転落小当りまで。保障バトル回数は参戦人数により1～3回。残保留4個あり。
- EXTRA BATTLE: 時短10000回相当、転落小当りまで。残保留4個あり。
- EXTRA BONUS∞: 次回大当り濃厚。

cTimeOrSpecialSystems:
- 超WIDE（同社比約1.5倍のヘソ）搭載。
- BREAKING BATTLEは参戦人数で保障バトル回数が変わる勝率可変型バトル。
- CタイムをLT到達契機とする構造は確認していない。

ceilingOrSupport:
- 遊タイム非搭載
- コンプリート機能搭載

gameFlow: |
  通常時 約1/199.8
   ↓ 初当り 2R約300個
   ├─ 25% → BREAKING BATTLE
   │          └─ 転落約1/21.1より先に右打ち当選約1/53.2
   │              └─ バトル勝利 → 10R約1500個 → LT「EXTRA BATTLE」
   │                  └─ 右打ち約1/53.2 / 転落約1/239.5 / 継続期待約86.5%
   │                      ├─ 20% → 1500個 + EXTRA BONUS∞（次回大当り濃厚）
   │                      └─ 80% → 1500個 + LT継続
   │                  → 転落後も残保留4個、引き戻し約7.3%
   └─ 75% → 通常時

notes:
- BREAKING BATTLEの33.6/52.5/66.0%は「通常初当り全体からのLT突入率」ではなく、下位RUSH突入後の保障バトル回数別LT突破期待度。分母を混同しない。
- EXTRA BATTLE継続約86.5%は転落までの継続期待と終了後残保留4個の引き戻し約7.3%を合算し、EXTRA BONUS∞を含む公表値。
- 右打ち約1/53.2は大当り約1/199.8と小当り約1/72.6の合算値で、純粋な大当り確率として扱わない。
- 業界記事の「約87%」は86.5%の丸め表記として扱いCONFLICTにしない。
- LT中の1500個は10R払出値。

sources:
- https://www.sanyobussan.co.jp/information/pdf/sanyo_press_release_20250828.pdf — メーカー公式プレス。正式機種名、型式、LT3.0プラス、トップ導入2025-11-04、LT約87%、ALL1500個、20%次回大当り濃厚。
- https://yugi-nippon.com/pachinko-new-machine/post-73005/ — 業界記事。型式e源外伝EHLG、1/199.8、BREAKING BATTLE、LT構造、約87%/ALL1500個/20%次回を照合。
- https://news.p-world.co.jp/articles/31774/greenbelt — 業界記事。導入日、超WIDE、参戦人数1～3人、LT期待約34～66%を照合。
- https://hisshobon.com/machineinfo/99086/ — 解析。通常1/199.8、右1/53.2、下位25%、転落1/21.1、突破33.6～66.0%、LT転落1/239.5、継続86.5%、出玉を照合。
- https://1geki.jp/pachinko/e_gen_ep_dairyu/51/ — 解析。10 COUNT JUDGE/7図柄から下位RUSH、時短10000回、条件別突破期待度を照合。
- https://1geki.jp/pachinko/e_gen_ep_dairyu/53/ — 解析。LT時短10000回、1/53.2、転落1/239.5、86.5%、残保留定義を照合。
- https://p-johojima.jp/machine_spec/post-13972/ — 解析/業界。特図1・BREAKING BATTLE・EXTRA BATTLE各振り分けを照合。
- https://nana-press.com/kaiseki/machine/1039/32121/ — 解析。1/53.2の合算定義、条件別突破率、86.5%の定義、払出表記を照合。

confidence:
- machineName/manufacturer/modelName/releaseDate: OFFICIAL + INDUSTRY
- LT搭載/名称/経路: OFFICIAL + INDUSTRY + ANALYSIS_HIGH
- 通常/右確率・下位RUSH・転落確率: INDUSTRY + ANALYSIS_HIGH
- LT継続率/出玉振り分け: OFFICIAL + INDUSTRY + ANALYSIS_HIGH
- 通常遊技全体基準の総LT到達率: UNVERIFIED_AFTER_RESEARCH

missingFields:
- 通常遊技全体基準の総LT到達率/確率（直接公表値未確認。独自合算禁止）

conflicts: []
