machineName: パチスロ獣王 王者の覚醒
manufacturer: Sammy / サミー
releaseDate: 2017-04-17
recordNumber: 1070
generation: 5号機 / 5.5号機
systemType: A+ART / ゲーム数上乗せ型ART
formalModelName: 獣王 王者の覚醒／ZA
certificationNumber: 6S1203
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- サミー公式ニュースリリース（2017-02-15）で新機種「パチスロ獣王 王者の覚醒」の発売と、2017年4月中旬から全国ホール稼働予定を一次確認。
- パチビー、HAZUSE、一撃、K-Navi、アタリ7が2017-04-17導入で一致。
- HAZUSEで型式名 `獣王 王者の覚醒／ZA`、検定番号 `6S1203` を確認。
- 2017-02-24付の単一業界試打ブログに「稼動開始日：4月3日～」表記があるが、サミー公式が4月中旬、4/5時点のサミーネットワークス公式も「導入前」「4月中旬導入予定」としており、複数の導入DBが4/17で一致するため、canonicalは2017-04-17。単一4/3表記は平均・上書きせずCONFLICTとして保持する。
reliability: OFFICIAL_FOR_MACHINE_IDENTITY_AND_APRIL_MID_WINDOW; INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE_FOR_2017_04_17; ANALYSIS_HIGH_FOR_FORMAL_MODEL_AND_CERTIFICATION

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 98.0% |
| 2 | 98.8% |
| 3 | 101.0% |
| 4 | 105.4% |
| 5 | 109.6% |
| 6 | 116.0% |
- 一撃、ちょんぼりすた、pachislo-data、PiDEA、5号機クロニクルで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART初当たり
| 設定 | ART |
|---:|---:|
| 1 | 1/588.0 |
| 2 | 1/575.3 |
| 3 | 1/519.8 |
| 4 | 1/456.5 |
| 5 | 1/385.0 |
| 6 | 1/331.2 |
- pachislo-dataの精密値をcanonicalとし、PiDEA/ちょんぼりすた/後年整理資料の丸め値 1/588・575・519〜520・456〜457・385・331 と整合。

### BIG / REG
| 設定 | BIG | REG |
|---:|---:|---:|
| 1 | 1/420.1 | 1/655.4 |
| 2 | 1/420.1 | 1/642.5 |
| 3 | 1/420.1 | 1/630.2 |
| 4 | 1/409.6 | 1/606.8 |
| 5 | 1/407.1 | 1/595.8 |
| 6 | 1/394.8 | 1/504.1 |

### 象BONUS
- 設定1〜4: 1/32768
- 設定5: 1/21845
- 設定6: 1/16384
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical: 約30G/50枚。
- ちょんぼりすたの解析値: 30.0〜30.3G/50枚。
- PiDEA、ぱちすろLIFEも30G/50枚で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「サバンナチャンス」単体: 約1.4枚/G。
- ボーナス込み: 約1.9枚/G。
- サミーネットワークス公式、パチビー、HAZUSE、ちょんぼりすたで一致。
reliability: OFFICIAL_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- BIG BONUS: 204枚。
- REG BONUS: 48枚。
- 象BONUS: 18枚。
- ART「サバンナチャンス」: 初回50G以上。継続時は30G以上。ゲーム数上乗せ型。
- ART初当たり時は「サバンナチャレンジ」で初期G数を決定するが、全内部振り分けは本DBのSCOPE_EXCLUDED。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常天井: ボーナス間999G消化でART当選。
- ARTを途中で挟んでもボーナス間天井はリセットされない。
- 天井到達後、ボーナス非成立のまま再度999Gに達した場合もART当選対象。
- CZは「ビーストバトル」（期待度約40〜42%）と「獣王モード」（約50%）。初当たり構造の補助値として保持。
- REG連状態はREG中の初期ポイントに影響し、BIG成立で連続回数がリセットされる。リセット時の初期連数再抽選は朝一挙動に影響するためresetBehavior側に限定して収録。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: VERIFIED_MULTI_SOURCE_WITH_RELEASE_DATE_CONFLICT_NOTE
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- ボーナス間天井: RESETし、299G / 599G / 999Gから再抽選。
- 内部状態: RESELECT。
- REG連状態: RESELECT。
- 朝一ステージ: 当時解析では `調査中`。推測で補完しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 据え置きでは前日のボーナス間ゲーム数を宵越し可能とする攻略資料があり、通常天井進捗はCARRYOVER。
- 据え置き時の内部状態・REG連状態を「据え置き」列で直接固定した独立資料は今回確認できず、純電断契約から機械的に転記せず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_GAME_COUNTER_CARRYOVER; UNVERIFIED_FOR_FULL_STATE_CONTRACT

### powerCycleBehavior
- 純電源OFF→ON:
  - 天井ゲーム数: CARRYOVER。
  - 内部状態: CARRYOVER。
- REG連状態の純電断時契約は、表記揺れ・型式・Sammy・据え置き/電源OFF ON/朝一/REG連を変えて再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- ステージ: 当時解析 `調査中`。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_FOR_CEILING_AND_INTERNAL_STATE

### gameCounterReset
- 基準: ボーナス間ゲーム数。
- settingChange: RESET + 299/599/999G再抽選。
- carryOver: CARRYOVER。
- powerCycle: CARRYOVER。
- ART当選/消化では通常ボーナス間天井をリセットしない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- 設定変更時天井振り分け:
  - 299G: 25.0%
  - 599G: 25.0%
  - 999G: 50.0%
- 通常天井999Gに対し、設定変更後は合計50%で599G以下となる明確な朝一短縮恩恵。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- 設定変更時REG連状態振り分け:
  - 0連: 50.0%
  - 1連: 5.0%
  - 2連: 5.0%
  - 3連: 5.0%
  - 4連: 5.0%
  - 5連: 5.0%
  - 6連: 25.0%
- 6連状態が選ばれ、朝一最初のボーナスがREGなら実質REG7連目扱いとなり、当時解析上ART当選が確定するため朝一価値が高い。
- 通常時の全モード移行・REGポイント全抽選はSCOPE_EXCLUDED。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### stateAfterReset
- 設定変更: 内部状態RESELECT。
- 純電源OFF→ON: 内部状態CARRYOVER。
- 設定変更時の通常/高確準備/高確/超高確の初期振り分け数値は、検索語・資料系統を変えた再探索でも直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH_FOR_RESELECT_VS_CARRYOVER; UNVERIFIED_FOR_NUMERIC_INITIAL_DISTRIBUTION

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 50%でボーナス間天井が599G以下に短縮。
- REG連状態の再抽選で6連状態が25%選択されるため、朝一REG時に大きな恩恵となる可能性がある。
- 内部状態再抽選あり。ただし朝一高確率の具体値は未固定。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### resetPenalties
- 前日のボーナス間ハマリ進捗は設定変更で消去される。
- 前日の有利な内部状態があった場合も設定変更で再抽選となる。
- 設定変更専用の追加ペナルティ数値: `NONE_CONFIRMED_AFTER_RESEARCH`。
reliability: ANALYSIS_HIGH

### resetDetection
- 299Gまたは599Gで天井ARTが発動した場合、通常999G天井には存在しない設定変更時短縮振り分けのため設定変更を強く示す。
- 999Gまで到達した場合は設定変更時にも50%選択されるため、据え置き/変更を確定できない。
- 前日ボーナス間G数が把握できる場合は宵越し天井挙動を変更/据え置き推測へ利用可能。
- 本機固有のガックン判別、朝一初期出目、ランプ等による確定的変更判別は、「獣王 王者の覚醒/獣王覚醒/ZA/6S1203/Sammy」+「ガックン/朝一/設定変更/据え置き/電源OFF ON」で再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 朝一ステージ判別は当時解析が `調査中` のため確定材料にしない。
reliability: ANALYSIS_HIGH_FOR_CEILING_BASED_INFERENCE; UNVERIFIED_FOR_GAKKUN_AND_STAGE

### numericResetData
- resetCeilingDistribution:
  - 299G: 25.0%
  - 599G: 25.0%
  - 999G: 50.0%
- resetRegChainStateDistribution:
  - 0: 50.0%
  - 1: 5.0%
  - 2: 5.0%
  - 3: 5.0%
  - 4: 5.0%
  - 5: 5.0%
  - 6: 25.0%
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## dataQualityNotes
- 導入日は2017-04-17をcanonical。サミー公式は「4月中旬」、4/5公式関連資料は「導入前/4月中旬導入予定」、HAZUSE/パチビー/一撃/K-Navi/アタリ7は4/17で一致する。
- 単一の2017-02-24業界試打ブログに4/3稼働開始表記があるため削除せずCONFLICT保持。ただし4/5時点の公式関連資料がまだ「導入前」としているため、4/3を全国導入日として採用しない。
- ちょんぼりすたの一覧表はHTML整形上、設定2・3のBIGセルが省略表示される箇所があるため、精密BIG/REG/ARTはpachislo-dataおよびPiDEA等でクロスチェック。
- ART純増1.4枚/Gとボーナス込1.9枚/Gを別定義として保持。
- 通常天井はART間ではなくボーナス間。ARTを挟んでも進捗を維持する。

## sources
取得日: 2026-09-09
1. サミー公式 — 新機種「パチスロ獣王 王者の覚醒」発売のお知らせ
   - https://www.sammy.co.jp/japanese/news/2017/642.html
   - 2017-02-15発表、機種存在、2017年4月中旬全国稼働予定
   - reliability: OFFICIAL
2. サミーネットワークス公式 — 777TOWN/777NEXT配信ニュース
   - https://www.sammy-net.jp/news/2017/05/-777town777next-1.html
   - 2017年4月ホール導入、A+ART、純増1.4枚/G・ボーナス込1.9枚/G
   - reliability: OFFICIAL_GROUP_COMPANY
3. サミーネットワークス公式 — ぱちガブッ！チャレンジゲーム
   - https://www.sammy-net.jp/news/2017/04/post-55.html
   - 2017-04-05時点で「導入前」、4月中旬導入予定
   - reliability: OFFICIAL_GROUP_COMPANY
4. HAZUSE — パチスロ 獣王 王者の覚醒
   - https://hazuse.com/machine/pachislot/6S1203/
   - 型式、検定番号、2017-04-17、天井、設定変更時299/599/999G振り分け、ART仕様
   - reliability: ANALYSIS_HIGH
5. パチビー — 機種情報
   - https://www.pachibee.jp/machines/about/217030006
   - 2017-04-17、5号機A+ART、純増、ART基本G数
   - reliability: INDUSTRY_DATABASE
6. 一撃 — パチスロ獣王 王者の覚醒
   - https://1geki.jp/slot/s_jyuuou_ohja/
   - 機械割、ボーナス+ART合算、導入日、基本獲得枚数、ART仕様
   - reliability: ANALYSIS_HIGH
7. ちょんぼりすた — 獣王 王者の覚醒
   - https://chonborista.com/slot/sammy-slot/33751/
   - スペック、30.0〜30.3G/50枚、天井、設定変更/電断、天井振り分け、REG連状態振り分け
   - reliability: ANALYSIS_HIGH
8. pachislo-data — 獣王 王者の覚醒
   - https://pachislo-data.com/sammy/33948
   - 精密BIG/REG/ART初当たり、機械割、約30G、リセット天井・REG連状態
   - reliability: ANALYSIS_HIGH
9. PiDEA — 三木流、獣王の評価は？
   - https://www.pidea.jp/articles/%E4%B8%89%E6%9C%A8%E6%B5%81%E3%80%81%E7%8D%A3%E7%8E%8B%E3%81%AE%E8%A9%95%E4%BE%A1%E3%81%AF%EF%BC%9F
   - 2017-03-31業界記事、BIG/REG/ART/出玉率/30G/50枚、納品4/16〜
   - reliability: INDUSTRY
10. アタリ7 — パチスロ獣王 王者の覚醒
   - https://www.atari7.com/slot/date1487913620.php
   - 2017-04-17、メーカー、ボーナス+ART合算、ART仕様
   - reliability: INDUSTRY_DATABASE
11. 単一業界試打ブログ — 獣王-王者の覚醒
   - https://ameblo.jp/kojitukekun/entry-12250694833.html
   - 「稼動開始日：4月3日～」表記。複数高信頼資料と競合するためcanonicalには不採用、CONFLICT保持
   - reliability: ANALYSIS_SINGLE / CONFLICT
12. 一撃 2017年4月新台カレンダー
   - https://1geki.jp/newmachinecalender/201704/
   - 4/17群監査補助
   - reliability: ANALYSIS_HIGH
13. モゲスロ 2017年新台カレンダー
   - https://moge-site.com/new-slot2017
   - 4/17群4機（おそ松くん/鬼浜/獣王/キン肉マン）監査
   - reliability: ANALYSIS_SINGLE_CALENDAR
14. 2-9伝説系新台一覧
   - https://29den.com/newslot/
   - 4/17群4機の独立カレンダー照合
   - reliability: ANALYSIS_SINGLE_CALENDAR

## missingFields
- settingChangeInitialInternalStateNumericDistribution: UNVERIFIED_AFTER_RESEARCH
- carryOverFullInternalStateContractBeyondGameCounter: UNVERIFIED_AFTER_RESEARCH
- powerCycleRegChainStateContract: UNVERIFIED_AFTER_RESEARCH
- morningStageContract: UNVERIFIED_AFTER_RESEARCH / CONTEMPORARY_SOURCE_SAYS_UNDER_INVESTIGATION
- machineSpecificGakkunDetection: UNVERIFIED_AFTER_RESEARCH

## conflicts
- CONFLICT_RELEASE_DATE_SINGLE_PREVIEW_BLOG_2017_04_03_VS_OFFICIAL_MID_APRIL_AND_MULTI_SOURCE_2017_04_17
