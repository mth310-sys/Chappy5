# アイムジャグラーEX（6号機）

No: 1379
machineName: アイムジャグラーEX（6号機）
machineNameVariants: アイムジャグラーEX / アイムジャグラーEX(2020年) / SアイムジャグラーEX / SアイムジャグラーEX-TP
manufacturer: 北電子
releaseDate: 2020-12-14
formalModelName: SアイムジャグラーEX-TP
certificationNumber: 9S1309

generation: 6号機
systemType: ノーマル / Aタイプ / 完全告知 / ボーナス主体

## identity / release
- 北電子公式検定情報で型式 `SアイムジャグラーEX-TP` を確認。東京都公安委員会2019-11-25公示の業界資料で検定番号 `9S1309`、北電子、回胴式を照合。
- HAZUSEで型式・検定番号・メーカー・導入開始日2020-12-14を一致確認。
- 北電子が2020-09-03に、COVID-19等で延期していた導入開始日を2020-12-14へ決定したことを業界記事で確認。当初予定の2020年春/5月は延期前予定日であり、実導入日は2020-12-14をcanonicalとする。
- reliability: OFFICIAL / INDUSTRY / DATABASE_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.0% |
| 2 | 98.0% |
| 3 | 99.5% |
| 4 | 101.1% |
| 5 | 103.3% |
| 6 | 105.5% |
- HAZUSE、なな徹、パチビー、1geki、当時業界記事で一致。
- reliability: INDUSTRY / DATABASE_HIGH / ANALYSIS_HIGH

## initialHitBySetting
| 設定 | BIG | REG | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/273.1 | 1/439.8 | 1/168.5 |
| 2 | 1/269.7 | 1/399.6 | 1/161.0 |
| 3 | 1/269.7 | 1/331.0 | 1/148.6 |
| 4 | 1/259.0 | 1/315.1 | 1/142.2 |
| 5 | 1/259.0 | 1/255.0 | 1/128.5 |
| 6 | 1/255.0 | 1/255.0 | 1/127.5 |
- HAZUSE、なな徹、パチビー、1geki、K-Navi、当時業界記事で一致。
- reliability: INDUSTRY / DATABASE_HIGH / ANALYSIS_HIGH

## baseGamesPer50
- 約40G/50枚。
- HAZUSE、パチ7、ちょんぼりすた、複数当時解析で一致。
- reliability: ANALYSIS_HIGH / DATABASE_HIGH

## netIncrease
- NOT_APPLICABLE（AT/ART非搭載のノーマルタイプ）。

## basicPayout
- BIG CHANCE: 平均約252枚。役構成上は280枚を超える払い出しで終了。
- BONUS GAME / REG: 平均約96枚。役構成上は98枚を超える払い出しで終了。
- パチビー、HAZUSE、グリーンべると系当時記事で一致。
- reliability: INDUSTRY / DATABASE_HIGH

## modeSpecificMinimumData
- ボーナスのみで出玉を増やすノーマルタイプ。
- 天井・ゾーン非搭載。
- 通常時の天国/高確等、朝一価値を生むゲーム数モードは確認されない。
- AT/ART・CZ・有利区間進行を物差し化する機種ではない。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_WITH_LIMITED_UNVERIFIED_FIELDS
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 天井非搭載のノーマル機のため、設定変更で消える天井G・周期・ATモード等は存在しない。
- 6号機ジャグラー一般の朝一解析では、リセット/設定変更台を打つこと自体の専用恩恵は **特になし** とされる。
- 1gekiの本機専用ページでは設定変更時の「状態」「楽曲変化」は現在調査中。機種固有の内部契約を推測補完しない。
- reliability: ANALYSIS_HIGH_FOR_NO_CEILING_OR_RESET_BENEFIT / UNVERIFIED_FOR_MACHINE_SPECIFIC_HIDDEN_STATE

### carryOverBehavior
- 天井・周期・朝一専用モードが非搭載のため、それらのCARRY_OVERは NOT_APPLICABLE。
- 純据え置き時の本機固有「状態」「楽曲条件」の内部保持契約は公開資料で直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 天井・周期・モードの引継ぎ論点は NOT_APPLICABLE。
- 1geki本機専用資料は電源OFF→ON時の「状態」「楽曲変化」を現在調査中としている。
- 機種名/型式名と `電源OFF ON / 電断 / 据え置き / 朝一 / リセット` を組み替えて再探索したが、本機固有の高信頼な追加契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 内部ゲーム数天井そのものが非搭載のため `NOT_APPLICABLE`。
- ホール側データカウンタ表示は実機内部天井とは別系統なので本DB対象外。

### ceilingAfterReset
- 天井非搭載。短縮天井も `NOT_APPLICABLE`。

### modeAfterReset
- 朝一価値を持つ通常/天国等のゲーム数モードは確認されず `NOT_APPLICABLE_FOR_YARDSTICK`。
- 設定変更専用モード振り分け表は `NO_PUBLIC_RESET_SPECIFIC_MODE_TABLE_FOUND_AFTER_RESEARCH`。

### stateAfterReset
- AT/CZ系の低確/高確状態を持つ機種ではない。
- ただし1gekiが本機の設定変更・電源OFF→ON双方で「状態」を調査中としているため、内部の全状態概念が存在しないと断定せず、本機固有契約は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- ノーマルタイプで、AT/ART/CZの有利区間管理を物差し化する機種ではないため `NOT_APPLICABLE_FOR_YARDSTICK`。
- ボーナスのみで出玉を増やす仕様はパチビー/HAZUSE/業界記事で確認。

### resetBenefits
- 6号機ジャグラーの朝一リセット専用恩恵は **特になし** とする解析あり。
- 天井短縮、朝一CZ、専用高確、専用モード等の本機固有恩恵は横断再探索後も確認できない。
- reliability: ANALYSIS_HIGH_FOR_NO_DEDICATED_BENEFIT

### resetPenalties
- 設定変更専用の定量的不利要素は `NONE_DIRECTLY_PUBLISHED`。
- 前日天井進行消失等は天井非搭載のため該当しない。

### resetDetection
- パチ7の6号機ジャグラー解析では、設定変更時に1G目のリールが一瞬ブレる「ガックン」で変更を推測できる可能性があるとされる。
- ただし同設定打ち直し、設定変更後の1G消化、リール清掃/手ズラし等で誤判定・対策が可能なため確定判別ではない。
- 本機について後年の実機観察資料では「僅かにリールがブレるが目視判別は難しく、スローモーションで辛うじて確認できる程度」とされる。
- よって `WEAK_EMPIRICAL_RESET_SIGNAL_NOT_DETERMINISTIC` として保存し、ガックン有無のみで設定変更確定とは扱わない。
- reliability: ANALYSIS_HIGH_FOR_SERIES_BEHAVIOR / EMPIRICAL_SINGLE_FOR_MACHINE_VISIBILITY

### numericResetData / publicMorningNumbers
- 設定変更専用のモード振り分け、朝一当選率、短縮天井、CZ率等は、表記/検索語/資料系統を変えて再探索後も固定できず `NO_PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_FOUND_AFTER_RESEARCH`。
- 本機には天井・朝一専用モードがなく、通常の設定別ボーナス確率を「朝一数値」として転用しない。

## resetBehavior 再探索メモ
2026-09-11。`アイムジャグラーEX 6号機 / アイムジャグラーEX(2020年) / SアイムジャグラーEX / SアイムジャグラーEX-TP / 9S1309 / 北電子` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / モード / 状態 / ガックン / リール / 恩恵 / 楽曲` を組み替え、北電子公式検定情報、HAZUSE、1geki、パチ7、なな徹、パチビー、K-Navi、ちょんぼりすた、当時解析、後年のジャグラー専門資料を横断。天井非搭載・リセット専用恩恵なし・ガックンは弱い推測材料まで固定。本機固有の電断時内部状態/楽曲契約とリセット専用数値は十分な再探索後も固定できないためUNVERIFIED/NO_PUBLIC_DATAとする。

## conflicts
- 導入日: 一部後年ページに2020-12-04表記があるが、北電子発表を報じた当時業界資料、HAZUSE、K-Navi、パチビー、1geki等が2020-12-14で一致。2020-12-14をcanonicalとし、12/04は `SOURCE_DATE_ERROR_OR_TYPO` として採用しない。
- 延期前予定: 2020年春/4月/5月予定の旧資料が残るが、COVID-19等で延期され北電子が2020-09-03に2020-12-14へ確定した経緯を保持。
- ガックン: 「変更推測に使える可能性」と「目視では極めて弱い」という資料差は平均せず、判別可能性と視認性を別項目として保持。

## missingFields
- 純電源OFF→ON時の本機固有内部状態/楽曲条件: UNVERIFIED_AFTER_RESEARCH
- 設定変更時の本機固有内部状態/楽曲条件: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用の朝一数値: NO_PUBLIC_RESET_SPECIFIC_NUMERIC_DATA_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-11
- https://www.kitadenshi.co.jp/slot-kentei/imjugglerex2020/ — 北電子公式検定情報 / OFFICIAL
- https://news.p-world.co.jp/articles/12306/yugitsushin — 東京都公安委員会検定通過情報 / INDUSTRY
- https://www.pidea.jp/articles/%E3%80%8Cs%E6%96%B0%E9%AC%BC%E6%AD%A6%E8%80%85zg%E3%80%8D%E3%80%8Cs%E3%82%A2%E3%82%A4%E3%83%A0%E3%82%B8%E3%83%A3%E3%82%B0%E3%83%A9%E3%83%BCex-tp%E3%80%8D%E3%81%8C%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E — 検定通過 / INDUSTRY
- https://hazuse.com/machine/pachislot/9S1309/ — 型式・導入日・基本性能 / DATABASE_HIGH
- https://hazuse.com/machine/pachislot/9S1309/genre/201/ — ボーナス・機械割・ベース・配当 / DATABASE_HIGH
- https://hazuse.com/machine/pachislot/9S1309/genre/203/ — ノーマル仕様・天井非搭載 / DATABASE_HIGH
- https://1geki.jp/slot/s_ij_ex_6/ — 基本性能 / ANALYSIS_HIGH
- https://1geki.jp/slot/s_ij_ex_6/3/ — 天井・設定変更・電源OFF/ON調査状況 / ANALYSIS_HIGH
- https://nana-press.com/kaiseki/machine/16/282/ — 設定別確率・機械割 / ANALYSIS_HIGH
- https://www.pachibee.jp/machines/index/220040006 — 基本スペック・獲得枚数 / INDUSTRY_DATABASE
- https://www.pachibee.jp/machines/about/220040006 — ノーマル機ゲームフロー / INDUSTRY_DATABASE
- https://p-kn.com/slot/3380/ — 導入日・基本性能 / DATABASE
- https://pachiseven.jp/articles/detail/14805 — 6号機ジャグラーの朝一ガックン・リセット恩恵 / ANALYSIS_HIGH
- https://jugjug.net/imjugglerex6 — 本機ガックン視認性の後年整理 / ANALYSIS_SINGLE
- https://news.p-world.co.jp/articles/14531/greenbelt — 2020-12-14導入決定・延期経緯 / INDUSTRY
- https://news.p-world.co.jp/articles/15324/greenbelt — 12/14導入・基本性能 / INDUSTRY
- https://yugi-nippon.com/pachinko-new-machine/post-39774/ — 12/14全国導入・基本性能 / INDUSTRY
- https://1geki.jp/newmachinecalender/202012/ — 2020年12月導入カレンダー / DATABASE_CALENDAR
- https://p-kn.com/calendar/202012/ — 2020年12月導入カレンダー（PB含む） / DATABASE_CALENDAR

## 2020-12-14 group audit note
- 1geki月間カレンダーは12/14のパチスロを本機1機としている。
- K-Navi月間カレンダーは同日に本機に加えてJPS `Sどんだけ` を掲載。
- JPS `SどんだけJ2` はUNO系列オリジナル/PBとして2020-12-14導入との専門資料が存在するため、全機種/PB収集方針では除外しない。
- よって2020-12-14群は本機登録時点で **OPEN_1_OF_AT_LEAST_2_KNOWN**。次にSどんだけJ2を個別調査する。
