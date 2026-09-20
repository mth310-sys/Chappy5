# ぱちんこＧⅠ優駿倶楽部２ ラッキートリガーver

収集日: 2026-09-21
status: COMPLETE_CORE

machineName: ぱちんこＧⅠ優駿倶楽部２ ラッキートリガーver
manufacturer: コナミアミューズメント
releaseDate: 2024-03-04
modelType: 甘デジ（通常時大当り約1/99.9）
gameType: 2種時短 / ST＋実質次回型ループのWループRUSH
jackpotProbability:
- 通常時: 約1/99.9
- 右打ち中: 約1/12.7
initialPayout:
- 3R 450個 または 10R 1500個（払出、V入賞条件）
rushEntryRate:
- 初当りから凱旋ロード: 5.5%
- 初当りから超凱旋ロード（LT）: 5.5%
- 初当りから何らかのRUSHへ: 11.0%
rushContinuationRate:
- 凱旋ロード: 約90%（時短24回＋残保留4）
- 超凱旋ロードと凱旋ロードを含むRUSH TOTAL継続率: 約96%（解析資料の合算値）
ltName: 超凱旋ロード
ltEntryRoute:
- 通常時初当りの5.5%で10R 1500個後に超凱旋ロードへ直行
- 凱旋ロード中の大当りの3%（10R）で超凱旋ロードへ
ltEntryRate:
- 通常時初当りから直行: 5.5%
- 凱旋ロード中の大当り1回あたり: 3%
- 凱旋ロード突入後、継続中にLTへ到達する期待度: 約24%
ltContinuationRate:
- 超凱旋ロード: 90%
- 10%の終了振り分けを引いても通常へ直落ちせず凱旋ロードへ移行
ltPayoutStructure:
- 超凱旋ロード中: 10R 1500個 3% / 8R 1200個 3% / 6R 900個 9% / 4R 600個 15% / 2R 300個＋超凱旋ロード 60% / 2R 300個＋凱旋ロード 10%
- 出玉は払出、V入賞条件
totalPayoutDistribution:
- 特図1: 10R 1500個＋超凱旋ロード 5.5% / 3R 450個＋凱旋ロード 5.5% / 10R 1500個＋通常 5.0% / 3R 450個＋通常 84.0%
- 特図2（凱旋ロード中）: 10R 1500個＋超凱旋ロード 3% / 8R 1200個＋凱旋ロード 3% / 6R 900個＋凱旋ロード 9% / 4R 600個＋凱旋ロード 15% / 2R 300個＋凱旋ロード 70%
- 特図2（超凱旋ロード中）: 10R 1500個＋超凱旋ロード 3% / 8R 1200個＋超凱旋ロード 3% / 6R 900個＋超凱旋ロード 9% / 4R 600個＋超凱旋ロード 15% / 2R 300個＋超凱旋ロード 60% / 2R 300個＋凱旋ロード 10%
timeShortening:
- 通常非RUSH当り: 0回
- 凱旋ロード: 時短24回＋残保留4
- 超凱旋ロード: 時短1000回（解析資料では＋残保留4表記あり）
cTimeOrSpecialSystems: ラッキートリガー搭載。通常ST「凱旋ロード」と実質次回型「超凱旋ロード」を往復し得るWループ構造。
ceilingOrSupport: 遊タイムなし
gameFlow:
```
通常時（約1/99.9）
 ↓ 初当り
├─ 89% → 3R 450個 or 10R 1500個 → 通常へ
├─ 5.5% → 3R 450個 → 凱旋ロード
│                         （24回＋残保留4、継続約90%）
│                              ↓ 大当り
│                         ├─ 97% → 凱旋ロード継続
│                         └─ 3% 10R → LT発動
│                                      ↓
└─ 5.5% → 10R 1500個 ─────────→ 超凱旋ロード
                                  （時短1000回、継続90%）
                                         ↓ 大当り
                                  ├─ 90% → 超凱旋ロード継続
                                  └─ 10% → 凱旋ロードへ
```

notes:
- 型式名: PGI優駿倶楽部2HT。検定番号310419。
- コナミアミューズメント公式が新内規ラッキートリガー対応機として発売を告知。
- 公式発表では「Wループラッシュ」として、次回大当りまで継続するループモード（時短1000回）とSTモードを組み合わせる構造を明記。
- 公式発表の初当り出玉は450個または1500個、ヘソ賞球3個。
- 超凱旋ロード突入時の期待出玉は公式/業界発表で約11500個（初当りを含む定義）。LT中単体の平均出玉と混同しない。
- 超凱旋ロード終了の10%を引いても凱旋ロードへ移るため、LT終了＝即通常ではない。

sources:
- https://www.konami.com/amusement/psm/pachinko/pcg1dc2-lt/ — コナミアミューズメント公式製品ページ（取得 2026-09-21）
- https://www.konami.com/amusement/corporate/ja/topics/20231211/ — コナミアミューズメント公式発売発表（2023-12-11、取得 2026-09-21）
- https://www.konami.com/amusement/corporate/ja/topics/20230927/ — コナミアミューズメント公式適合発表（2023-09-27、取得 2026-09-21）
- https://amusement-japan.co.jp/article/detail/10003980/ — Amusement Japan（2023-12-12、取得 2026-09-21）
- https://news.p-world.co.jp/articles/26943/nippon — 遊技日本 / P-WORLD業界ニュース（2024-02-19、取得 2026-09-21）
- https://www.p-world.co.jp/machine/database/9970 — P-WORLD機種DB（取得 2026-09-21）
- https://hazuse.com/machine/pachinko/PX0207/ — HAZUSE（取得 2026-09-21）
- https://cs62.cs-plaza.com/g/pachi/pla/p_conq/pachi_db/konami_pachi/013/kh02.php — パチマガスロマガ詳細スペック（取得 2026-09-21）

confidence:
- LT搭載/正式名称/メーカー/2024年3月稼働: OFFICIAL
- 基本確率/初当り出玉/Wループ構造: OFFICIAL
- 導入日2024-03-04/型式/検定番号: ANALYSIS_HIGH（複数資料一致）
- 特図1/特図2振り分け: ANALYSIS_HIGH（P-WORLD、HAZUSE等で一致）
- 凱旋ロードからLT到達期待度約24%: INDUSTRY / ANALYSIS_HIGH

missingFields:
- なし（ミッション必須コア項目は収集済み）

conflicts:
- なし。公式の「大当り確率1/99」表現と詳細資料の約1/99.9は丸め/表示精度差として扱う。
