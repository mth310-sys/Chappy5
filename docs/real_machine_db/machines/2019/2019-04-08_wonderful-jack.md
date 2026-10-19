# No.1278 ワンダフルジャック

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: ワンダフルジャック
- manufacturer: 岡崎産業
- releaseDateCanonical: 2019-04-08
- generation: 5.9号機
- systemType: ノーマルAタイプ / ボーナス成立後リプレイ高確率状態 / 技術介入あり
- formalModelNameCanonical: `ワンダフルジャック／W2`
- certificationNumber: `7S1921`
- settings: `1 / 2 / 5 / 6`
- collectedAt: 2026-09-11

## performanceCore
### payoutRateBySetting / initialHitBySetting
| 設定 | BIG | REG | 合算 | 機械割 |
|---:|---:|---:|---:|---:|
| 1 | 1/288.7 | 1/436.9 | 1/173.8 | 97.1% |
| 2 | 1/276.5 | 1/409.6 | 1/165.1 | 99.8% |
| 5 | 1/263.2 | 1/383.3 | 1/156.0 | 103.2% |
| 6 | 1/247.3 | 1/348.6 | 1/144.7 | 107.9% |

- HAZUSE、K-Navi、パチマガスロマガ、ちょんぼりすた、すろぱちくえすとで一致。

### baseGamesPer50
- **約36.6〜37.7G/50枚**。HAZUSE、パチマガスロマガ、すろぱちくえすとで一致。

### netIncrease / basicPayout
- BIG: **312枚**。
- REG: **最大129枚**。134枚を超える払い出しで終了し、技術介入で1度14枚役を取得後に回避して最大枚数を得る。
- 通常時のリアルボーナス主体。ボーナス成立後はリプレイ確率が約1/7.3から約1/1.9へ上昇する状態を持つが、出玉増加用RTではなくボーナス成立察知のゲーム性として扱う。

### technicalIntervention
- 市場掲載機械割: **97.1 / 99.8 / 103.2 / 107.9%**。
- REG中に1度14枚役を獲得する技術介入あり。
- ちょんぼりすたは「左リールチェリー狙い＋REG中技術介入を実践すれば設定1でも出玉率100%超」とするが、設定別の完全攻略時機械割の具体値は十分な再探索後も固定できず `PUBLIC_NUMERIC_VALUE_NOT_FOUND`。

## modeSpecificMinimumData
- 通常ゲーム数天井: **非搭載**。
- AT/ART/CZ/規定Gモード: `NOT_APPLICABLE`。

## resetBehavior
### settingChangeBehavior
- 天井・AT/ART/CZ・通常モードを持たないため、それらの設定変更リセットは `NOT_APPLICABLE`。
- ボーナス成立後のリプレイ高確率状態や成立済みボーナスフラグを含む特殊境界状態について、本機固有の設定変更契約は検索語・資料系統変更後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置きで継承して朝一狙いに使える天井/モード/CZ蓄積要素は `NOT_APPLICABLE`。
- 成立済みボーナス等の特殊境界状態の据え置き契約は `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 通常ゲーム数天井・ATモード・有利区間は `NOT_APPLICABLE`。
- 純電源OFF→ON時の成立済みボーナス/リプレイ高確率状態の直接契約は `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 天井非搭載のため `NOT_APPLICABLE`。

### ceilingAfterReset
- 天井非搭載。短縮天井なし。`NOT_APPLICABLE`。

### modeAfterReset
- AT型の通常/天国等モード、朝一専用モードは `NOT_APPLICABLE`。
- 設定変更専用の当選優遇モードは `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- 通常時に高確/低確で初当たりを管理する機種ではないため `NOT_APPLICABLE`。
- ボーナス成立後の特殊リプレイ高確率状態のみ、設定変更/純電断境界契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 5.9号機ノーマルAタイプで、本DBの朝一有利区間管理は `NOT_APPLICABLE`。

### resetBenefits
- ちょんぼりすたは **「朝イチの恩恵などは特に無し」** と明記。設定変更専用天井短縮・当選優遇等は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更専用の出玉上の不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- モゲスロは「液晶なしAタイプで変更判断は難しく、もしガックンが有効な筐体ならガックン判別程度」とする。
- 本機固有のガックン有効性・発生率・確定条件は固定されていないため `POSSIBLE_GAKKUN_REFERENCE_ONLY_NONDETERMINISTIC`。
- 天井・有利区間ランプ・朝一モードによる判別は `NOT_APPLICABLE`。

### numericResetData
- 設定変更専用モード振り分け、朝一当選率、短縮天井、恩恵発生率: `PUBLIC_NUMERIC_VALUE_NOT_FOUND / NOT_APPLICABLE`。
- ガックン発生率: `PUBLIC_NUMERIC_VALUE_NOT_FOUND`。

## releaseDate / formalModel
- HAZUSEで型式 `ワンダフルジャック／W2`、検定番号 `7S1921`、2019-04-08導入、岡崎産業、5号機ノーマルを確認。
- K-Navi、当時解析も2019-04-08で一致。
- グリーンべると2019-03-13当時記事は4/7納品予定、BIG312枚・REG最大129枚・合算約1/174〜1/145を報道し、4/8ホール稼働と整合する。

## boundaryAudit
- LATEST_HANDOFF指定の2019-04-08群の残存未処理機としてNo.1278登録。
- 2019年導入一覧、4/8当時新台まとめ、K-Navi月間カレンダー、個別業界/解析資料を横断すると、4/8群の新規本線は `ゴーゴージャグラー2 / マイフラワー-30 / ワンダフルジャック` の3機で一致。
- 義風堂々!!～兼続と慶次～は既存No.1273で4/1 vs 4/8の日付CONFLICTを保持済みのため重複登録しない。
- 別型式/別スペック/PB/地域差の追加機は今回の横断再監査で固定できず、**2019-04-08_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**。

## missingFields
- 設定変更/据え置き/純電断時の成立済みボーナスおよびボーナス成立後リプレイ高確率状態の直接契約。
- 完全攻略時の設定別機械割具体値。
- 本機固有ガックンの有効性・発生率・確定条件。

## conflicts / qualityNotes
- 後年の低品質5.9号機まとめには本機の導入日・スペックが別機種値と混線した記載が見られるため不採用。HAZUSE、K-Navi、パチマガスロマガ、当時業界記事、複数解析一致をcanonicalとする。
- REGは業界当時記事/HAZUSEで最大129枚。払い出し終了条件134枚超と矛盾しない。

## sources
取得日: 2026-09-11
1. HAZUSE — https://hazuse.com/machine/pachislot/7S1921/ — 型式、検定番号、導入日、設定別BIG/REG/合算/機械割、ベース、BIG/REG性能 — reliability: `MACHINE_DB_HIGH`
2. K-Navi — https://p-kn.com/slot/3211/ — 2019-04-08導入、設定別ボーナス確率照合 — reliability: `MACHINE_DB_HIGH`
3. パチマガスロマガ ボーナス確率 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/81/h.php — 設定別BIG/REG/合算/機械割照合 — reliability: `ANALYSIS_HIGH_CROSSCHECK`
4. パチマガスロマガ 小役 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/okazaki_slot/81/c.php — 約36.6〜37.7G/50枚 — reliability: `ANALYSIS_HIGH_CROSSCHECK`
5. ちょんぼりすた — https://chonborista.com/slot/okazaki-slot/80480/ — 5.9号機、性能、天井なし、朝一恩恵なし、技術介入で設定1の100%超言及 — reliability: `ANALYSIS_HIGH`
6. モゲスロ — https://moge-site.com/archives/21715 — 性能照合、朝一変更判別は困難、ガックンは有効なら候補という弱い記述 — reliability: `ANALYSIS_SINGLE_RESET_SPECIFIC`
7. すろぱちくえすと — https://www.slopachi-quest.com/article/wonderful-jack-settei/ — 導入日、設定別性能、36.6〜37.7G/50枚、天井なし — reliability: `ANALYSIS_HIGH_CROSSCHECK`
8. グリーンべると — https://web-greenbelt.jp/00011149/ — 2019-03-13当時業界発表、4/7納品予定、BIG312枚/REG最大129枚/合算レンジ — reliability: `INDUSTRY_CONTEMPORARY`
9. 2019年導入一覧 — https://www.slopachi-quest.com/article/2019-dounyuukishu/ — 4/8群3機の横断確認 — reliability: `CHRONOLOGY_CROSSCHECK`
10. 4/8当時新台まとめ — https://pachi-jyouhoukyoku.hatenablog.com/entry/2019/04/08/%E3%80%90%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E7%B7%A8%E3%80%914%E6%9C%888%E6%97%A5%E5%B0%8E%E5%85%A5%E4%BA%88%E5%AE%9A%E6%A9%9F%E7%A8%AE%E3%80%81%E7%B0%A1%E6%98%93%E3%82%B9%E3%83%9A — ゴーゴージャグラー2/マイフラワー30/ワンダフルジャックの3機掲載 — reliability: `CHRONOLOGY_CONTEMPORARY_CROSSCHECK`
