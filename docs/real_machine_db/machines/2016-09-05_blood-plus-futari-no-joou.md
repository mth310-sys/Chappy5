machineName: パチスロBLOOD+ 二人の女王
manufacturer: タイヨーエレック
releaseDate: 2016-09-05
recordNumber: 1005
generation: 5号機 / 5.5号機期
systemType: A+ART / ボーナス+ゲーム数上乗せART
formalModelName: パチスロBLOOD＋ 二人の女王／XA
certificationNumber: 6S0606
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEで導入開始日2016-09-05、メーカー タイヨーエレック、型式名「パチスロBLOOD＋ 二人の女王／XA」、検定番号6S0606を確認。
- 一撃、K-Navi、pachislo-data、ちょんぼりすたでも2016-09-05導入を照合。
reliability: INDUSTRY_DB_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.8% |
| 2 | 98.7% |
| 3 | 100.7% |
| 4 | 104.5% |
| 5 | 108.2% |
| 6 | 112.2% |
- HAZUSE、一撃、ちょんぼりすた、期待値見える化、pachislo-dataで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
| 設定 | ボーナス合算 | ART初当たり | ボーナス+ART合算 |
|---:|---:|---:|---:|
| 1 | 1/455.1 | 1/398.0 | 1/212.3 |
| 2 | 1/448.8 | 1/382.5 | 1/206.5 |
| 3 | 1/436.9 | 1/356.1 | 1/196.2 |
| 4 | 1/420.1 | 1/315.3 | 1/180.1 |
| 5 | 1/404.5 | 1/270.9 | 1/162.2 |
| 6 | 1/381.0 | 1/231.1 | 1/143.9 |
- HAZUSE、一撃、ちょんぼりすた、pachislo-dataで同系列一致。
- 期待値見える化の設定2ボーナスのみ1/448.9表記で、1/448.8との差は丸め精度差として原値を保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 約34G/50枚。
- 設定別整理値: 設定1 34.0G / 2 34.0G / 3 34.1G / 4 34.1G / 5 34.2G / 6 34.3G。
- ちょんぼりすた、期待値見える化、pachislo-dataで照合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART「BLOOD CHANCE+」: 約1.5枚/G。
- ボーナス込み純増: 約1.8枚/G。
- 初回基本ゲーム数: 50G+α。
- 一撃、ちょんぼりすた、期待値見える化、パチビーで照合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
canonical:
- BLOOD BONUS / Secret Story Bonus: 約204枚。
- 二人の女王モード（プレミアボーナス）: 約28枚。
- HAZUSE、一撃、期待値見える化で204枚/28枚を確認。
conflict:
- ちょんぼりすたはBIG / Secret Story Bonusを208枚と掲載。平均せず `CONFLICT_BIG_PAYOUT_204_VS_208` として保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE / CONFLICT

## modeSpecificMinimumData
- A+ART機。ART「BLOOD CHANCE+」は初回50G+α、約1.5枚/G。
- 通常時にはBLOOD EYE出現率に関わる4段階の内部状態（低確/通常/高確/超高確）と、DEAD or ALIVE当選率に関わる5段階DOAモードが存在。
- DOAモードはBLOOD EYE揃いで昇格抽選し、ボーナスまたはART当選まで転落しない。最上位ではBLOOD EYE揃い時の50%でDEAD or ALIVE当選。
- 規定ゲーム数到達型の天井は非搭載。
- 有利区間制度導入前。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_PUBLIC_MACRO_BEHAVIOR
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 設定変更時はDOAモードを再抽選。
- BLOOD EYE出現率に関わる内部状態も再抽選。
- 朝一液晶ステージは沖縄ステージ。
- 後年整理解析では設定変更時にリールガックン有り。
- 規定G数天井は存在しないためゲーム数天井リセットという概念は非該当。

### carryOverBehavior
- 据え置きではDOAモード・内部状態を引き継ぐ。
- 前日のハマリ中に蓄積したDOAモード昇格価値が残るため、ハマリ/BEスルー履歴が朝一価値を持ち得る。

### powerCycleBehavior
- 純電源OFF→ONではDOAモードを引き継ぐ。
- 内部状態も引き継ぐ。
- 後年整理解析では純電源OFF→ONのみの場合リールガックン無し。

### gameCounterReset
- 規定ゲーム数型天井: **NONE / NOT_APPLICABLE**。
- 本機の朝一価値はゲーム数天井ではなく、ボーナス/ARTまで転落しないDOAモード蓄積の保持/再抽選に由来する。

### ceilingAfterReset
- 規定ゲーム数天井: **NONE**。
- 設定変更専用の短縮天井: **NOT_APPLICABLE**。
- 一部解析の「800G〜狙い」は天井発動G数ではなく、ハマリに伴うDOAモード上昇期待を利用した立ち回り目安。天井値として混同しない。

### modeAfterReset
- DOAモード: **SETTING_CHANGE_RESELECT / POWER_CYCLE_CARRYOVER / CARRYOVER**。
- 設定変更時の具体的な5段階振り分け数値は、表記揺れ・略称・メーカー名を含め再探索したが比較可能な公開表を固定できず **UNVERIFIED_AFTER_RESEARCH**。

### stateAfterReset
- BLOOD EYE出現率に関わる低確/通常/高確/超高確の内部状態: **SETTING_CHANGE_RESELECT / POWER_CYCLE_CARRYOVER / CARRYOVER**。
- 設定変更時の具体的状態振り分け数値は十分な再探索後も固定できず **UNVERIFIED_AFTER_RESEARCH**。

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更専用の短縮天井・専用CZ当選率優遇・朝一専用高モード確率など、比較可能な公開数値を伴う明確な専用恩恵は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 据え置き/純電断時は前日のDOAモード蓄積を引き継ぐため、前日ハマリ台は朝一で価値が残り得る。これはリセット恩恵ではなくCARRYOVER特性。

### resetPenalties
- 設定変更により、前日ハマリ中に昇格していた可能性のあるDOAモードが再抽選されるため、宵越しのDOAモード蓄積価値を失う可能性がある。
- 規定G数天井はないため「天井までの消化G数を失う」という不利とは区別する。

### resetDetection
- 後年整理解析: 設定変更時リールガックン有り / 純電源OFF→ON時ガックン無し。
- 朝一ステージは設定変更時沖縄ステージとされる。
- 一撃の2016-09-14時点ページは設定変更/電源OFF→ONのモード・状態・液晶ステージを「調査中」としており、後続解析で情報が確定した成熟時差を保持。
- ガックンは実戦環境やリール停止条件の影響を受け得るため、客AIでは有力推測材料として扱い100%確定フラグとはしない。

### numericResetData
- 設定変更時DOAモード具体振り分け: UNVERIFIED_AFTER_RESEARCH
- 設定変更時内部状態具体振り分け: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用短縮天井: NONE / NOT_APPLICABLE
- 最上位DOAモード時: BLOOD EYE揃いごとにDEAD or ALIVE当選率50%（通常ゲーム性のモード性能。リセット専用値ではない）

## dataQualityNotes
- identity、設定別機械割、ボーナス/ART初当たり、約34G/50枚、ART純増は複数解析系統で一致。
- resetBehaviorは一撃の当時初期情報が「調査中」だが、ちょんぼりすたの後年整理で設定変更時DOA/状態再抽選、電源OFF→ON引継ぎ、沖縄ステージ、ガックン差を明示。DOAモードの通常時性質はHAZUSE/一撃/期待値見える化でも照合。
- 設定変更時の具体モード/状態振り分け数値は十分な検索語変更後も固定できないためUNVERIFIED_AFTER_RESEARCH。
- BIG獲得枚数は204枚と208枚で資料競合があるため平均せずCONFLICT。

## conflicts
- `CONFLICT_BIG_PAYOUT_204_VS_208`: HAZUSEは305枚超払出終了・204枚獲得、一撃も204枚、期待値見える化も204枚。一方、ちょんぼりすたはBIG/Secret Story Bonusを208枚と掲載。canonicalは複数一致する204枚とし208枚を競合原値として保持。
- `ROUNDING_SETTING2_BONUS_4488_VS_4489`: HAZUSE等1/448.8に対し期待値見える化1/448.9。丸め差として原値保持。

## sources
取得日: 2026-09-08

1. HAZUSE — パチスロBLOOD+ 二人の女王
   - https://hazuse.com/machine/pachislot/6S0606/
   - 型式、検定番号、導入日、ボーナス/ART確率、機械割、204枚/28枚、内部状態/DOAモード。
2. 一撃 — パチスロBLOOD+ 二人の女王
   - https://1geki.jp/slot/s_bloodplus2/
   - 2016-09-05導入、機械割、ART仕様、204枚。
3. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_bloodplus2/3/
   - 規定G天井なし、DOAモード5段階、最上位BE時50%、2016-09-14時点の設定変更/電断項目「調査中」。
4. ちょんぼりすた — BLOOD+ 二人の女王
   - https://chonborista.com/slot/taiyo-slot/22564/
   - 導入日、性能コア、設定別ベース、朝一リセット表（DOAモード/状態再抽選、電断引継ぎ、沖縄ステージ、ガックン）、208枚競合値。
5. 期待値見える化 — ブラッドプラス 天井・朝一リセット解析
   - https://slotjin.com/tenjou/bloodplus/
   - 導入日、機械割、初当たり、約34G、204枚、ART約1.5枚/G、規定G天井なし。
6. pachislo-data — BLOOD+二人の女王
   - https://pachislo-data.com/taiyoelec/26437
   - 2016-09-05、約34G、天井非搭載、設定別ART/ボーナス/出率。
7. K-Navi — パチスロBLOOD＋ 二人の女王
   - https://p-kn.com/slot/2565/
8. パチビー — パチスロBLOOD+ 二人の女王
   - https://www.pachibee.jp/machines/reach/216070003

## missingFields
- 設定変更時DOAモード5段階の具体的再抽選振り分け。
- 設定変更時低確/通常/高確/超高確の具体的再抽選振り分け。

## QA note
- v0.7 resetBehaviorを新規収集時に適用。
- 当時一撃の未確定情報だけで止めず、後年整理資料まで横断して設定変更/電源OFF→ON差を補完。
- ゲーム数天井非搭載とDOAモードの蓄積進捗を混同しない。
