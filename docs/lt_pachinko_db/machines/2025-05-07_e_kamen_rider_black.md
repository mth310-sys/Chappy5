# e 仮面ライダーBLACK

status: COMPLETE_CORE
retrievedAt: 2026-09-21

machineName: e 仮面ライダーBLACK
manufacturer: 京楽産業.
modelCode: e仮面ライダーBLACK-KRJ2
releaseDate: 2025-05-07
modelType: スマパチ / デカヘソ / ライトミドルLT
gameType: 一種二種混合 / 2段階ST型RUSH

jackpotProbability:
- 図柄揃い: 約1/349.9（ブラックギフト除外）
- ブラックギフト: 約1/697〜1/701（解析資料の丸め/表記差。K-Navi 1/701、ちょんぼりすた 1/697）
- 大当り合算: 約1/233
- 右打ち実質: 約1/50.1（大当り約1/233 + 小当り約1/63の合算）

initialPayout:
- 図柄揃い: 3R 約450個（払出）
- ブラックギフト: 2R 約300個（払出）

rushEntryRate:
- JUSTICE RUSH: 図柄揃い時50%（ブラックギフト除外）

rushContinuationRate:
- JUSTICE RUSH: 約60%（ST41回 + 残保留4個。残保留引き戻し約7.7%込み）

ltName: EXTREAM JUSTICE RUSH

ltEntryRoute:
1. JUSTICE RUSH中大当りの50%（10R約1500個）でLT発動。
2. ブラックギフト当選時にも昇格演出経由のLT突入経路あり。具体的な昇格割合は今回確認資料で直接値を確定できず。
3. RUSH終了後の残保留4個で引き戻した場合は、約1500個 + EXTREAM JUSTICE RUSH突入（継続）。

ltEntryRate:
- JUSTICE RUSH中大当り時: 50%
- 通常時図柄揃いを分母とする単純な主要経路は、図柄揃い50%で下位RUSH→下位中大当り50%でLT。ただし通常初当り全体にはブラックギフト経路も存在するため、総LT到達率は公表直接値を確認できず UNVERIFIED_AFTER_RESEARCH。独自合算しない。

ltContinuationRate:
- 約80%（ST75回 + 残保留4個、残保留引き戻し約7.7%込み）

ltPayoutStructure:
- 約3000個（10R×2）+ LT継続: 50%
- 約1500個（10R）+ LT継続: 50%

 totalPayoutDistribution:
- 通常図柄揃い（ブラックギフト除外）: 3R約450個 + JUSTICE RUSH 50% / 3R約450個 + 通常 50%
- JUSTICE RUSH中: 10R約1500個 + EXTREAM JUSTICE RUSH 50% / 10R約1500個 + JUSTICE RUSH 50%
- EXTREAM JUSTICE RUSH中: 約3000個（1500×2）+ LT 50% / 約1500個 + LT 50%
- ブラックギフト: 2R約300個。LT昇格経路あり、詳細割合はUNVERIFIED_AFTER_RESEARCH。

timeShortening:
- JUSTICE RUSH: ST41回 + 残保留4個
- EXTREAM JUSTICE RUSH: ST75回 + 残保留4個

cTimeOrSpecialSystems:
- デカヘソ
- ダイレクトスタートステージ（DSS）
- ブラックギフト（通常図柄揃いとは別の約300個当り。LT昇格経路あり）

ceilingOrSupport:
- 遊タイム: 非搭載
- 潜伏確変: 非搭載

gameFlow:
通常時
 ↓ 図柄揃い約1/349.9（3R約450個）
創世王チャレンジ
 ├─ 50% → JUSTICE RUSH（41回+残4、約60%）
 │          ↓ RUSH中大当り
 │          ├─ 50% 10R約1500個 → EXTREAM JUSTICE RUSH
 │          └─ 50% 10R約1500個 → JUSTICE RUSH継続
 └─ 50% → 通常

通常時
 ↓ ブラックギフト約1/697〜1/701（2R約300個）
昇格演出
 └─ 一部 → EXTREAM JUSTICE RUSH（具体割合UNVERIFIED_AFTER_RESEARCH）

EXTREAM JUSTICE RUSH（75回+残4、約80%）
 ↓ 大当り
 ├─ 50% 約3000個（1500×2）+ LT継続
 └─ 50% 約1500個 + LT継続

notes:
- メーカー公式は2025-05-07全国導入予定、LT約80%、LT中50%約3000個を明記。
- 遊技通信記事には導入予定を2025-04-07とする表記があるが、メーカー公式・グリーンべると・一撃・複数解析は2025-05-07で一致するためcanonical releaseDateは2025-05-07。4/7表記は日付資料競合メモとして保持するが、機種スペック値のCONFLICTにはしない。
- `EXTREAM` は公式/業界資料で使用されている機種上の表記を保存（一般英単語のEXTREMEへ勝手に正規化しない）。
- RUSH突入50%はブラックギフト除外の図柄揃い条件付き。全通常当選を分母にしたRUSH/LT率へ換算しない。

sources:
- https://www.kyoraku.co.jp/news/detail/817 — メーカー公式。2025-03-25発表、2025-05-07導入、LT約80%、3000個50%。
- https://news.p-world.co.jp/articles/30577 — グリーンべると。確率、RUSH/LT回数・継続、全主要振り分け。
- https://news.p-world.co.jp/articles/30558/yugitsushin — 遊技通信。型式、確率、RUSH/LT構造（導入日4/7表記は他資料と不一致）。
- https://1geki.jp/pachinko/e_kmnr_black/ — 一撃。型式、2025-05-07、確率、ST、LT構造。
- https://1geki.jp/pachinko/e_kmnr_black/53/ — 一撃。LT突入経路、残保留仕様。
- https://nana-press.com/kaiseki/machine/950/29098/ — なな徹。合算確率、出玉、遊タイム/潜伏なし。
- https://p-kn.com/pachinko/4322/ — K-Navi。ブラックギフト1/701、大当り合算1/233、右合算定義。
- https://chonborista.com/pachinko/kyoraku/234588/ — ちょんぼりすた。ブラックギフト1/697、導入日。

confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH
missingFields:
- ブラックギフト当選時のEXTREAM JUSTICE RUSH昇格割合: UNVERIFIED_AFTER_RESEARCH
- 通常初当り全体を分母とする総LT到達率: UNVERIFIED_AFTER_RESEARCH
conflicts:
- ブラックギフト確率 1/697 vs 1/701 は解析資料間の近似表記差として両記録。厳密値を平均しない。
- 導入予定日: 遊技通信/P-WORLD転載に2025-04-07表記あり。一方、メーカー公式・グリーンべると・一撃等は2025-05-07。canonicalはメーカー公式を優先し2025-05-07。
