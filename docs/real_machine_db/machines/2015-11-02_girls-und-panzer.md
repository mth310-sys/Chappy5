# パチスロ ガールズ＆パンツァー

machineName: パチスロ ガールズ＆パンツァー
manufacturer: オリンピア（平和系）
releaseDate: 2015-11-02
releaseDatePrecision: exact_hall_start_multi_source
recordNumber: 930
generation: 5号機
systemType: AT / セット継続型・完全バトル型
formalModelName: UNVERIFIED_AFTER_RESEARCH
inspectionNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- オリンピア公式2015年製品一覧・公式機種ページで本機を確認。
- K-Naviはホール導入開始を **2015-11-02** と明記。複数の当時/後年解析も同日で一致。
- 後継の「ガールズ＆パンツァーG」「劇場版」「L最終章」と混同しない。
- 正式型式名・検定番号は表記揺れ・メーカー名・型式検索を変えて再探索したが、今回固定できず `UNVERIFIED_AFTER_RESEARCH`。

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.1% |
| 2 | 98.3% |
| 3 | 100.2% |
| 4 | 104.5% |
| 5 | 108.1% |
| 6 | 113.1% |

- Pachinavi、ちょんぼりすた、当時解析DBで系列一致。

## initialHitBySetting
主要初当たりとしてAT「戦車道」を採用。

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/399.7 |
| 2 | 1/378.3 |
| 3 | 1/354.2 |
| 4 | 1/298.4 |
| 5 | 1/259.9 |
| 6 | 1/216.6 |

- 複数資料で同系列を照合。整数丸めの 1/400〜1/217 表記は丸め差。

## baseGamesPer50
- canonical: **約45.2G/50枚**。
- 約45G表記は丸め差として扱う。

## netIncrease
- AT「戦車道」: **約2.5枚/G**。

## basicPayout
- AT「戦車道」は固定G数・固定枚数型ではなく、対戦校を撃破するまで継続する完全バトル型。
- 継続はバトル結果で決まり、セットストックも存在。
- 実機完全再現用の対戦校別・ATレベル別継続率や詳細抽選は収集対象外。

## modeSpecificMinimumData
- 通常時最大天井: **1280G**。
- 天井到達時: **AT当選（継続率優遇とする解析あり）**。
- 天井候補ゲーム数として **66 / 91 / 456 / 622 / 1023 / 1216 / 1280G** を扱う解析があるが、通常時全振り分けは完全再現用詳細として収集対象外。
- 456G天井選択は設定4以上示唆として知られるが、本DBの設定示唆収集対象外。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_CORE
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- **天井ゲーム数 RESET**。
- **内部状態 RESET / 再抽選**。
- 朝一の内部モード/ゲーム数関連は **再抽選** とする複数解析を確認。
- 設定変更後 **666GでCZ「あんこう祭り」突入が確定**とする当時解析が複数存在。
- 初期に流布した「666GでAT確定」は誤情報/ガセとして後に訂正されており、CZ確定とAT確定を分離して保存する。

### carryOverBehavior
- 据え置き時は **天井ゲーム数・内部状態/モードを引き継ぐ** とする朝一比較資料を確認。
- 「あんこう煽り」は前日からの累積ゲーム数側で発生するため、変更判別の補助に使われた。

### powerCycleBehavior
- 純電源OFF→ONのみ: **天井ゲーム数 CARRYOVER / 内部状態・モード CARRYOVER**。
- 朝一ステージは通常の「通学路ステージ」とする比較資料あり。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_COMPARISON

### gameCounterReset
- settingChange: **RESET**
- carryOver: **CARRYOVER**
- purePowerCycle: **CARRYOVER**

### ceilingAfterReset
- normalMaximum: **1280G**。
- settingChangeMaximumATCeiling: **1280G**。
- resetSpecificCZ: **666GでCZ「あんこう祭り」確定**。
- **666G AT確定ではない**。AT期待度約66%のCZとする資料を採用。

### modeAfterReset
- settingChange: **RESELECTED**。
- carryOver/purePowerCycle: **CARRYOVER**。
- 設定変更時の全モード数値振り分けは、今回の再探索で信頼できる直接表を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- settingChange: **RESET / RESELECTED**。
- carryOver/purePowerCycle: **CARRYOVER**。
- 0G直後の通常A/B・高確A/B・超高確等の具体振り分けは `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 最大AT天井そのものは1280Gのまま。
- 設定変更後は **666GでCZ「あんこう祭り」確定**。当該CZのAT期待度は **約66%** とする当時解析が複数存在。
- 朝一客行動上は666Gゾーンが明確なリセット恩恵。

### resetPenalties
- 前日の天井ゲーム数・内部状態/モード進捗は設定変更で失われる。
- その他の設定変更固有不利は **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- リールガックンは「しない」とする当時記事があるが記事自体に **要検証** 注記があるため、確定判別には採用せず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時は末尾66G付近の「あんこう煽り」の基準ゲーム数がリセットされる。当時解析では、朝一早い段階（例: 366G以内）の煽り発生を据え置き寄りの材料とする立ち回りが存在。
- いずれも単独での設定変更確定演出としては扱わない。

### numericResetData
- reset AT maximum ceiling: **1280G**。
- reset-specific CZ: **666G → あんこう祭り確定**。
- あんこう祭りAT期待度: **約66%**。
- purePowerCycle: **天井ゲーム数・内部状態/モード CARRYOVER**。
- settingChange mode/state exact distribution: **UNVERIFIED_AFTER_RESEARCH**。

## conflicts
- `RESET_666G_AT_VS_CZ`: 初期資料の「666GでAT確定」は後続当時解析でガセ濃厚と訂正。複数資料で一致する **666GでCZ「あんこう祭り」確定 / AT期待度約66%** をcanonicalとし、旧AT確定説は採用しない。
- ガックン: 「しない」とする資料は要検証表記を伴うため確定値に昇格させない。

## missingFields
- formalModelName: `UNVERIFIED_AFTER_RESEARCH`
- inspectionNumber: `UNVERIFIED_AFTER_RESEARCH`
- resetModeExactDistribution: `UNVERIFIED_AFTER_RESEARCH`
- resetImmediateStateExactDistribution: `UNVERIFIED_AFTER_RESEARCH`
- resetDetectionReelGakkun: `UNVERIFIED_AFTER_RESEARCH`

## sources
取得日: 2026-09-08

1. オリンピア公式 — パチスロ ガールズ＆パンツァー
   - https://www.olympia.co.jp/newmachine/gup/
   - 公式機種ページ。2015-09-15公開、2015-10-30更新。reliability: OFFICIAL
2. オリンピア公式 — 2015年発売機種
   - https://www.olympia.co.jp/official/products/2015.html
   - 2015年発売機種として本機を確認。reliability: OFFICIAL
3. K-Navi — パチスロガールズ＆パンツァー
   - https://p-kn.com/slot/2361/
   - ホール導入開始2015-11-02、AT基本仕様。reliability: ANALYSIS_HIGH
4. Pachinavi — パチスロ ガールズ&パンツァー（無印・初代）
   - https://pachinavi.net/machines/girls-und-panzer/
   - AT初当たり、機械割、約45.2G/50枚、純増約2.5枚/G、導入日。reliability: ANALYSIS_HIGH
5. ちょんぼりすた — ガールズ＆パンツァー スロット全情報
   - https://chonborista.com/slot/orinpia-slot/12042/
   - AT初当たり/機械割、ベース、純増、天井等の相互照合。reliability: ANALYSIS_HIGH
6. 期待値見える化 — ガルパン 朝一リセット後の挙動・恩恵・実践値
   - https://slotjin.com/slot/girls-und-panzer-reset/
   - 設定変更/電源OFF→ON比較、1280Gリセット、666G CZ、内部モード再抽選/引継ぎ。reliability: ANALYSIS_HIGH_DIRECT_RESET_COMPARISON
7. すろぱちくえすと — ガールズ＆パンツァー 朝一設定変更・リセット時の恩恵
   - https://www.slopachi-quest.com/article/girl-pan-reset/
   - 666G AT確定説を訂正し、CZ「あんこう祭り」側として整理。天井/状態リセット。reliability: ANALYSIS_HIGH_PERIOD_CORRECTION
8. すろぱちくえすと — リセット・設定変更判別
   - https://www.slopachi-quest.com/article/girl-pan-resetcheck/
   - あんこう煽りの据え置き判別文脈、ガックン要検証。reliability: ANALYSIS_HIGH_PERIOD_GUIDE
9. P-WORLD — パチスロ ガールズ&パンツァー
   - https://www.p-world.co.jp/machine/database/7857
   - 5号機AT、純増2.5枚/G、基本ゲームフローの照合。reliability: HIGH

## confidence
- identityManufacturer: OFFICIAL
- exactReleaseDate: ANALYSIS_HIGH_MULTI_SOURCE
- performanceCore: ANALYSIS_HIGH_MULTI_SOURCE
- payoutRate: ANALYSIS_HIGH_MULTI_SOURCE
- initialHit: ANALYSIS_HIGH_MULTI_SOURCE
- baseGamesPer50: ANALYSIS_HIGH_MULTI_SOURCE
- settingChangeBehavior: ANALYSIS_HIGH_MULTI_SOURCE_DIRECT_RESET
- carryOverBehavior: ANALYSIS_HIGH_MULTI_SOURCE
- purePowerCycleBehavior: ANALYSIS_HIGH_DIRECT_COMPARISON
- reset666CzBenefit: ANALYSIS_HIGH_MULTI_SOURCE_WITH_PERIOD_CORRECTION
- exactResetModeDistribution: UNVERIFIED_AFTER_RESEARCH
- resetDetection: PARTIAL / NON_DETERMINISTIC
