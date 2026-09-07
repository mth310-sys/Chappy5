# パチスロ ガン×ソード

machineName: パチスロ ガン×ソード
manufacturer: 高砂電器産業 / TAKASAGO
releaseDate: 2015-06-08
releaseDatePrecision: exact_hall_start_multi_source
releaseDateNote: HAZUSE、パチ&スロ必勝本で2015-06-08導入開始が一致。PiDEA Xは2015-04-09時点で納品日2015-06-07予定と報道しており、納品予定と全国ホール導入日を分離する。
generation: 5号機
systemType: AT / 周期融合抽選 / バトル継続型
modelName: ガンソードDT
inspectionNumber: 4S1120
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 96.8% |
| 2 | 98.9% |
| 3 | 99.5% |
| 4 | 103.1% |
| 5 | 106.5% |
| 6 | 110.2% |

- HAZUSEとパチ&スロ必勝本で全設定一致。
- グリーンべるとは発表時点で96.8%～110.2%と上下限一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

AT「REVENGE BATTLE」初当たり:

| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/248 |
| 2 | 1/240 |
| 3 | 1/222 |
| 4 | 1/216 |
| 5 | 1/198 |
| 6 | 1/185 |

- HAZUSE、パチ&スロ必勝本で一致。グリーンべるとも発表時に1/248～1/185と上下限一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約32G/50枚**。
- HAZUSEの実解析値と、PiDEA X・グリーンべるとの発表記事で一致。
- 本機はスラッシュAT採用機で、通常時は指定された手順での消化を前提とする。通常手順から外した場合のコイン持ちは同一比較値に混ぜない。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## netIncrease

- AT「REVENGE BATTLE」純増 **約2.8枚/G**。
- PiDEA X、グリーンべると、P-WORLD、必勝本で一致。
- confidence: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- AT「REVENGE BATTLE」: **1ラウンド18G**。
- 基本構成は前半10G + バトルパート8G。
- 継続率: **77%～98%**。
- 7の倍数ラウンドは継続確定。
- ゲーム数上乗せ/セット数上乗せ主体ではなく、継続率に性能を集約したAT。

## modeSpecificMinimumData

- 通常時は **32G / 64G / 128G / 256G** の4周期を複合してAT/CZ抽選する「周期融合抽選」。
- 滞在周期モード別の最大天井:
  - 32Gモード: **128G**
  - 64Gモード: **320G**
  - 128Gモード: **640G**
  - 256Gモード: **1024G**
- HAZUSE、P-WORLDで一致。
- 通常の32Gモード移行率は設定別に25 / 25 / 35 / 25 / 30 / 33%という解析値があるが、「設定変更時専用振り分け」と明記されていないためresetBehavior数値へは転記しない。
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: PARTIAL_AFTER_MULTI_QUERY_RESEARCH
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 機種名表記揺れ（ガン×ソード/ガンソード）、型式名ガンソードDT、高砂/TAKASAGO/KPE高砂、設定変更/リセット/朝一/周期/天井/モード/据え置き/電源ON OFF/ガックンを組み替え、HAZUSE、必勝本、P-WORLD、当時業界記事、当時攻略記事、後年DBを横断した。
- 通常時の周期モードと天井値そのものは高信頼で固定できたが、**設定変更時に周期進捗をRESETするか、どのモードをどの振り分けで再抽選するかを本機固有の直接資料として固定できなかった**。
- `UNVERIFIED_AFTER_RESEARCH`。一般的な5号機AT挙動から補完しない。

### carryOverBehavior

- 据え置き時の周期進捗・周期モード・内部状態の完全な引継ぎ契約を、本機固有の直接資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 宵越し可能/不可能を一般論から推定しない。

### powerCycleBehavior

- 設定変更なしの純粋な電源OFF→ONで、周期進捗・モード・内部状態がどうなるかを直接比較した本機固有資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset

- 設定変更: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き: `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。
- 既知の通常天井最大値1024Gを、リセット契約の根拠には流用しない。

### ceilingAfterReset

- 通常時は周期モード別に128 / 320 / 640 / 1024G天井。
- 設定変更専用の固定短縮天井や、朝一のみの特殊天井数値は十分な再探索後も確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- ただし設定変更時のモード再抽選契約自体が未固定のため、「恩恵なし」と断定せず、専用固定天井のみNONE_CONFIRMEDとする。

### modeAfterReset

- 通常時の周期モードは32 / 64 / 128 / 256Gの4種。
- 設定変更時の初期周期モード振り分けを直接示す資料は `UNVERIFIED_AFTER_RESEARCH`。
- HAZUSE掲載の32Gモード移行率25 / 25 / 35 / 25 / 30 / 33%は通常解析であり、reset専用値とは扱わない。

### stateAfterReset

- 設定変更時・据え置き・純電源OFF→ONそれぞれの内部状態契約は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更専用の短縮天井、朝一専用高確保証、AT/CZ当選率優遇など、比較可能な公開数値は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常時の周期構造・32G周期移行率は朝一専用値ではないため混ぜない。

### resetPenalties

- 設定変更専用の公開不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection

- 本機固有のガックン、液晶初期表示、周期表示差などで設定変更/据え置きを確定または強く推測できる高信頼契約は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常時はサブ液晶の輪で滞在周期モードが示唆され、表示されないモードは否定されるが、これは通常のモード示唆であり設定変更判別とは分離する。

### numericResetData

- resetSpecificFixedCeiling: `NONE_CONFIRMED_AFTER_RESEARCH`。
- resetModeDistribution: `UNVERIFIED_AFTER_RESEARCH`。
- resetStateDistribution: `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleCarryOver: `UNVERIFIED_AFTER_RESEARCH`。
- resetDetectionNumericData: `NONE_CONFIRMED_AFTER_RESEARCH`。

## conflicts

- 重大な性能コア数値CONFLICTは今回確認なし。
- 導入日は全国ホール稼働開始2015-06-08をcanonicalとし、PiDEA Xの「納品日6月7日予定」は別イベントとして保持する。

## missingFields

- settingChangeBehaviorの周期進捗RESET/CARRY_OVER直接契約: `UNVERIFIED_AFTER_RESEARCH`。
- carryOverBehaviorの周期/モード/状態: `UNVERIFIED_AFTER_RESEARCH`。
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時周期モード振り分け: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更時内部状態: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックン/表示判別: `NONE_CONFIRMED_AFTER_RESEARCH`。

## sources

取得日: 2026-09-07

1. HAZUSE — https://hazuse.com/machine/pachislot/4S1120/
   - 型式ガンソードDT、検定4S1120、2015-06-08導入、AT初当たり、機械割、約32G/50枚、周期モード、モード別天井。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
2. パチ&スロ必勝本 — https://p.hisshobon.jp/machine/2579/1/52224
   - 2015-06-08導入、設定別AT初当たり/機械割、AT18G、純増2.8枚/G。
   - confidence: ANALYSIS_HIGH_PERIOD_SOURCE
3. PiDEA X — https://www.pidea.jp/articles/KPE%E3%80%8C%E3%82%AC%E3%83%B3%C3%97%E3%82%BD%E3%83%BC%E3%83%89%E3%80%8D%E6%96%B0%E6%8A%80%E8%A1%93%E3%82%B9%E3%83%A9%E3%83%83%E3%82%B7%E3%83%A5AT%E6%90%AD%E8%BC%89
   - 2015-04-07発表会、純増約2.8枚/G、約32G/50枚、AT18G、納品日6月7日予定。
   - confidence: INDUSTRY
4. グリーンべると — https://web-greenbelt.jp/00007690/
   - 発表日2015-04-07、32Gベース、純増2.8枚/G、AT初当たり1/248～1/185、機械割96.8～110.2%、周期融合抽選。
   - confidence: INDUSTRY
5. P-WORLD — https://www.p-world.co.jp/machine/database/7709
   - AT18G/純増2.8枚、4周期、モード別天井128/320/640/1024G。
   - confidence: INDUSTRY_DB_PLUS_ANALYSIS
6. KONAMI公式系 こちらマジハロ情報局 — https://www.konami.com/amusement/psm/portal/magihallo/blog_mh/2015/mhs_blog_150623.html
   - 2015年6月8日より全国ホール稼働開始の一次系補強。
   - confidence: OFFICIAL_GROUP_SOURCE
7. 2015年導入機一覧回顧 — https://slotnews777.blog.fc2.com/blog-entry-2348.html
   - 2015-06-08、KPE高砂、周期タイプAT、約32Gベースの補助照合。
   - confidence: SECONDARY_REVIEW

## notes

- 実機完全再現用のCZ内部ポイント抽選、AT中継続率詳細振り分け、レア役別抽選は収集対象外として省略。
- resetBehavior欠損は、最初の検索結果だけでなく複数の表記・型式・メーカー名・reset関連検索語と資料系統を変えた後に判定している。
