machineName: スーパープラネットデラックス
manufacturer: 山佐
releaseDate: 2016-08-22
recordNumber: 1003
generation: 5号機 / 5.5号機期
systemType: A+RT / 完全告知・ボーナス主体
formalModelName: UNVERIFIED_AFTER_RESEARCH
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- K-Navi、パチスロ必勝本、P-WORLD、ALL7で2016-08-22導入・山佐を確認。
- 2016-06-13のグリーンべると当時記事で山佐発表、ノーマルAタイプ、SB312枚・REG104枚、SB後30G RT、8月下旬納品予定を確認。
- 正式型式名/検定番号は「スーパープラネットデラックス」「スーパープラネットDX」「型式」「検定番号」「6S」等へ検索語を変え、中古実機系も含め再探索したが直接固定できず推測しない。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 96.9% |
| 2 | 98.1% |
| 3 | 99.8% |
| 4 | 102.6% |
| 5 | 105.2% |
| 6 | 112.3% |
- 必勝本、P-WORLD、2-9伝説、ちょんぼりすたで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | BIG | REG | 合算 |
|---:|---:|---:|---:|
| 1 | 1/286.1 | 1/451.9 | 1/175.2 |
| 2 | 1/284.9 | 1/431.1 | 1/171.5 |
| 3 | 1/280.0 | 1/409.6 | 1/166.3 |
| 4 | 1/273.0 | 1/344.9 | 1/152.4 |
| 5 | 1/268.5 | 1/287.4 | 1/138.8 |
| 6 | 1/238.3 | 1/238.3 | 1/119.1 |
- 必勝本、P-WORLD、2-9伝説で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約34G/50枚。
- 2016年解析資料のちょんぼりすた、2-9伝説で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- BIG後RT「フルーツゲーム」30G。
- K-Naviは「出玉を減らすことなく」と説明するが、比較可能な厳密な純増枚数/Gは今回固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: INDUSTRY_ANALYSIS_HIGH_FOR_DURATION / UNVERIFIED_FOR_NET_PER_G

## basicPayout
- SUPER BONUS: 312枚固定。
- REGULAR BONUS: 104枚固定。
- グリーンべると当時記事、P-WORLD、必勝本、パチ7で一致。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 完全告知のノーマル/A+RT機。
- SUPER BONUS終了後のみ30G RT「フルーツゲーム」へ突入。
- 通常時ゲーム数天井: **非搭載**。
- AT/ART通常時モード・CZ天井: **NOT_APPLICABLE**。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR_WITH_UNVERIFIED_TRANSIENT_RT_STATE
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 通常時ゲーム数天井・AT/ARTの長期モードを持たないため、天井リセット/モード再抽選は **NOT_APPLICABLE**。
- 設定変更専用の短縮天井、朝一専用モード、高確/CZ、初当たり優遇は、機種名表記揺れ、設定変更、リセット、朝一、据え置き、電源、ガックン、RTを組み替えて再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。
- RT途中で設定変更した際の一時的RT状態の直接契約は本機固有資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。一般的な5号機A+RT挙動から推測しない。

### carryOverBehavior
- 通常時天井/長期モードは非搭載のため、据え置き時に引き継ぐ天井進捗はなし。
- RT途中など一時的状態の翌日据え置き契約は **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior
- 純電源OFF→ONで引き継ぐ通常時天井/長期モードは非搭載。
- RT途中など一時的内部状態の純電断時契約は、検索語・資料系統変更後も本機固有の直接資料を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### gameCounterReset
- 通常時ゲーム数天井: **NOT_APPLICABLE**。

### ceilingAfterReset
- 天井非搭載のため **NOT_APPLICABLE**。
- 設定変更専用短縮天井: **NONE**。

### modeAfterReset
- AT/ARTの長期通常時モード/朝一専用モード: **NOT_APPLICABLE / NONE_CONFIRMED_AFTER_RESEARCH**。

### stateAfterReset
- 朝一客行動へ影響する設定変更専用高確・状態優遇: **NONE_CONFIRMED_AFTER_RESEARCH**。
- BIG後30G RTはボーナス後の一時状態であり、朝一リセット専用モードではない。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 短縮天井、朝一専用高確、専用CZ、専用初当たり優遇: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetPenalties
- 設定変更で失われる通常時天井進捗・長期AT/ARTモードは非搭載。
- その他の設定変更専用不利要素: **NONE_CONFIRMED_AFTER_RESEARCH**。

### resetDetection
- 本機固有のガックン、初期出目、役物、ランプ、ゲーム数挙動による確定的な設定変更/据え置き判別は、検索語・資料系統を変更して再探索したが **NONE_CONFIRMED_AFTER_RESEARCH**。
- 完全告知役物の通常演出を変更判別材料へ転用しない。

### numericResetData
- 設定変更時モード振り分け: NOT_APPLICABLE / NONE_CONFIRMED
- 短縮天井: NOT_APPLICABLE
- 朝一一定G以内当選率/設定変更専用恩恵発生率: NONE_CONFIRMED_AFTER_RESEARCH

## dataQualityNotes
- 導入日・メーカー・方式・ボーナス枚数・RT30Gは当時業界記事と複数解析資料で高一致。
- 機械割、BIG/REG/合算は複数解析資料で同値一致。
- ベース約34G/50枚は複数解析資料で一致。
- 正式型式/検定番号、RT純増/G、RT途中の設定変更/据え置き/純電断契約は十分な再探索後も直接固定できずUNVERIFIED。
- 実機完全再現用の一時状態推定は行わない。

## conflicts
- NONE_FOR_CONFIRMED_CORE_VALUES

## sources
取得日: 2026-09-08

1. グリーンべると / P-WORLD業界ニュース — 3号機最後の名機「スープラ」が完全復刻
   - https://news.p-world.co.jp/articles/8440/greenbelt
   - 2016-06-13、山佐発表、ノーマルA、SB312枚、REG104枚、SB後30G RT、8月下旬納品予定
   - reliability: INDUSTRY
2. パチ＆スロ必勝本 — 基本スペック
   - https://p.hisshobon.jp/machine/2781/1/59137
   - 導入2016-08-22、設定別BIG/REG/合算、機械割、312/104枚、30G RT
   - reliability: ANALYSIS_HIGH
3. K-Navi — スーパープラネットデラックス
   - https://p-kn.com/slot/2536/
   - 導入2016-08-22、Aタイプ、合算、SB後30G RT
   - reliability: ANALYSIS_HIGH_ARCHIVE
4. P-WORLD — スーパープラネットデラックス
   - https://www.p-world.co.jp/machine/database/8076
   - 5号機RT完全告知、設定別BIG/REG/合算/機械割、312/104枚、30G RT
   - reliability: INDUSTRY_DB
5. 2-9伝説 — スーパープラネットデラックス
   - https://29den.com/superplanetdx/
   - 約34G/50枚、天井なし、設定別機械割/ボーナス確率
   - reliability: ANALYSIS_SINGLE
6. ちょんぼりすた — スーパープラネットDX
   - https://chonborista.com/slot/yamasa-slot/21577/
   - A+RT、約34G/50枚、導入2016-08-22、スペック、312/104枚、RT30G
   - reliability: ANALYSIS_HIGH
7. パチ7 — ボーナス
   - https://pachiseven.jp/machines/4870/cutout/5
   - 導入2016-08-22、SB312枚、REG104枚、SB後30G RT
   - reliability: ANALYSIS_HIGH
8. ALL7 — 2016年8月導入予定一覧
   - https://www.all7.jp/plans/index/2016/08
   - 山佐、2016-08-22
   - reliability: INDUSTRY_DB

## missingFields
- formalModelName: UNVERIFIED_AFTER_RESEARCH
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- RT netIncrease per G: UNVERIFIED_AFTER_RESEARCH
- transient RT state across setting change / carryover / pure power cycle: UNVERIFIED_AFTER_RESEARCH
