# サイバードラゴン2

machineName: サイバードラゴン2
manufacturer: 山佐
releaseDate: 2011-07-04
releaseDateStatus: ANALYSIS_HIGH_EXACT_DATE; K-Naviが2011-07-04ホール導入開始、山佐公式は2011年7月稼働、グリーンべるとは7月上旬納品予定。
generation: 5号機
systemType: A+ART / 選択型ART / CZ / 天井
coreStatus: COMPLETE_CORE_WITH_BASE_AND_RESET_DETAILS_UNVERIFIED

## chronologyNote

- 最新mainの recordCount 587 / chronologicalFrontier 2011-06-27 から継続。
- 6/27同日群と既存treeを再監査。スカイラブ3等は既登録のため重複作成せず。
- 2011-06-28以降を探索し、具体導入日を確認できた未登録候補のうち2011-07-04「サイバードラゴン2」を588件目として追加。
- 同日未処理候補「センゴク回胴記」等が残るため7/4同日群は未完。

## payoutRateBySetting

- 設定1: **96.9%**
- 設定2: **98.0%**
- 設定3: **100.1%**
- 設定4: **105.0%**
- 設定5: **109.0%**
- 設定6: **113.1%**

P-WORLD、パチマガスロマガ、旧山佐系回顧資料で一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## initialHitBySetting

### JAC
- 設定1: **1/280.1**
- 設定2: **1/280.1**
- 設定3: **1/270.8**
- 設定4: **1/268.6**
- 設定5: **1/266.4**
- 設定6: **1/262.1**

### ART初当り
- 設定1: **1/229.9**
- 設定2: **1/218.7**
- 設定3: **1/206.0**
- 設定4: **1/188.1**
- 設定5: **1/168.3**
- 設定6: **1/147.5**

### JAC+ART合算
- 設定1: **1/126.3**
- 設定2: **1/122.8**
- 設定3: **1/117.0**
- 設定4: **1/110.6**
- 設定5: **1/103.1**
- 設定6: **1/94.4**

P-WORLDとパチマガスロマガで一致。
confidence: ANALYSIS_HIGH_CROSSCHECKED

## baseGamesPer50

**UNVERIFIED_AFTER_RESEARCH**。

「サイバードラゴン2 / 山佐 / 50枚 / 1000円 / 1k / ベース / コイン持ち」等へ検索語を展開し、公式、当時解析、旧DB、回顧資料を横断したが本機固有の直接値を確定できず。小役確率から逆算しない。

## basicPayoutAndART

- JAC: **最大約36枚**
- ART「サイバーRUSH」: **約+2.0枚/G**
- 玄武RUSH: 基本**30G〜**、セット数上乗せ型
- 白虎RUSH: 基本**30G〜**、ゲーム数上乗せ型
- 朱雀RUSH: ベルナビ回数管理型、初回10回
- ドラゴンRUSH: プレミアムART、ベルナビ回数管理型
- 玄武/白虎/朱雀には表・裏モードがあり、プレイヤーが任意選択可能。

山佐公式、グリーンべると、K-Navi、P-WORLD、パチマガスロマガで整合。
confidence: OFFICIAL_AND_INDUSTRY_HIGH

## ceiling

- **ART間1280G**でART超高確率状態へ移行。
- ART準備状態中にも別途天井機能が存在することをK-Naviの本機専用解析項目で確認したが、今回取得できた公開本文では具体G数を確定できず。

confidence: ANALYSIS_HIGH_FOR_1280G; PARTIAL_FOR_PREPARATION_CEILING

## resetBehavior — v0.7

settingChangeBehavior: **UNVERIFIED_AFTER_RESEARCH**。K-Naviに本機専用「設定変更後の挙動」解析項目が存在することは確認したが、現存取得本文からART間1280Gカウンタ、内部状態、CZ、ART潜伏等の具体処理を直接確定できず。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のART間ゲーム数・内部状態保持を本機固有の直接本文で確定できず。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。設定変更を伴わない電源OFF→ON時のART間カウンタ・状態処理を直接確定できず。

gameCounterReset: **UNVERIFIED_AFTER_RESEARCH**。1280G天井の設定変更時CLEAR/RETAINを直接確定できず、一般則から補完しない。

ceilingAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常天井はART間1280G。設定変更専用短縮天井・別天井数値は確認できず。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。通常時に内部状態が存在することは確認できるが、設定変更時振り分けを直接確定できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。CZ「サイバーミッション」、ART潜伏、各種内部状態の設定変更時処理を直接確定できず。

advantageousSectionReset: **NOT_APPLICABLE**。有利区間制度導入前の5号機。

resetBenefits: **NONE_CONFIRMED_AFTER_RESEARCH**。リセット専用短縮天井・朝一優遇数値を確認できず。

resetPenalties: **NONE_CONFIRMED_AFTER_RESEARCH**。前日天井進捗消失を含め、設定変更時処理を直接確認できないため断定しない。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。ガックン、初期出目、液晶、ランプ等の設定変更/据え置き判別を本機固有資料で確定できず。

numericResetData:
- 通常天井: **ART間1280G → ART超高確率状態**
- 設定変更時天井カウンタ: **UNVERIFIED_AFTER_RESEARCH**
- リセット専用短縮天井: **NONE_CONFIRMED_AFTER_RESEARCH**
- 設定変更時状態振り分け: **UNVERIFIED_AFTER_RESEARCH**
- 朝一特定G以内当選率: **NONE_CONFIRMED_AFTER_RESEARCH**
- 据え置き時カウンタ/状態: **UNVERIFIED_AFTER_RESEARCH**
- 単純電源OFF→ON時カウンタ/状態: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorConfidence: **PARTIAL_BY_SYSTEM_DATA; SETTING_CHANGE/CARRYOVER/POWER_CYCLE/DETECTION UNVERIFIED_AFTER_RESEARCH**

## missingFields

- 型式名 / 検定番号: **UNVERIFIED_AFTER_RESEARCH**
- baseGamesPer50: **UNVERIFIED_AFTER_RESEARCH**
- ART準備状態中天井の具体数値: **UNVERIFIED_AFTER_RESEARCH**
- settingChangeBehavior details: **UNVERIFIED_AFTER_RESEARCH**
- carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**
- powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**
- resetDetection: **UNVERIFIED_AFTER_RESEARCH**

## researchNote

「サイバードラゴン2 / サイバードラゴン２ / 山佐」と「型式 / 検定 / 機械割 / JAC / ART初当り / 50枚 / 1000円 / ベース / 天井 / 1280 / 設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 状態 / CZ / ガックン」を組み替え、山佐公式、グリーンべると、K-Navi、P-WORLD、パチマガスロマガ、旧山佐系回顧資料を横断。性能コアと通常天井は複数系統で回収。resetBehaviorはK-Naviに専用項目の存在までは確認できたが本文値を取得できないため一般則で補完しない。

## sources — 取得日 2026-09-04

1. 山佐ネクスト「サイバードラゴン2」
   - https://yamasa-next.co.jp/model_cd2/
   - 5号機A+ART、2011年7月稼働、選択型ART概要。
2. グリーンべると「山佐から選択型ART搭載の『サイバードラゴン2』」
   - https://web-greenbelt.jp/00002152/
   - 2011-06-01発表、7月上旬納品予定、ART約+2.0枚/G、各RUSH概要。
3. K-Navi「サイバードラゴン2」
   - https://p-kn.com/slot/1441/
   - 2011-07-04ホール導入開始、ART概要、設定変更後/天井/ART準備状態中天井の専用解析項目。
4. P-WORLD「サイバードラゴン2」
   - https://www.p-world.co.jp/machine/database/6391
   - JAC/ART確率、ART約+2.0枚/G、ART間1280G天井、各RUSH仕様。
5. パチマガスロマガ「サイバードラゴン2 基本システム」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/180/a.php
   - ART約+2.0枚/G、ARTタイプ、JAC約36枚。
6. パチマガスロマガ「サイバードラゴン2 ボーナス抽選確率」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yamasa_slot/180/h.php
   - JAC、ART初当り、合算、PAYOUT設定別数値。
