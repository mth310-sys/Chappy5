# No.1266 パチスロ ヱヴァンゲリヲン AT777

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ ヱヴァンゲリヲン AT777
- manufacturer: ビスティ
- releaseDateCanonical: 2019-02-18
- generation: 6号機
- systemType: AT / 差枚数管理型擬似ボーナス
- formalModelNameCanonical: `SヱヴァンゲリヲンAT777F`
- certificationNumber: `8S1123`
- settings: `1 / 2 / 3 / 4 / 5 / 6`
- collectedAt: 2026-09-11

## performanceCore
### payoutRateBySetting
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.8% |
| 2 | 99.3% |
| 3 | 100.7% |
| 4 | 103.9% |
| 5 | 107.0% |
| 6 | 109.5% |

### initialHitBySetting
| 設定 | ボーナス初当たり | ボーナス出現率（引き戻し込み） |
|---:|---:|---:|
| 1 | 1/454.0 | 1/211.8 |
| 2 | 1/425.4 | 1/201.5 |
| 3 | 1/401.0 | 1/193.1 |
| 4 | 1/347.5 | 1/172.9 |
| 5 | 1/301.8 | 1/155.9 |
| 6 | 1/270.0 | 1/144.5 |

- HAZUSE、おスロおパチおいでやす、K-Navi等で一致。

### baseGamesPer50
- **約50G/50枚**。
- 公式機種紹介では通常時1周期約50G。複数解析でもベース約50G/50枚で一致。

### netIncrease / basicPayout
- AT純増: **約4.0枚/G**。
- BIG BONUS: 差枚数管理型AT。初期50枚 or 100枚からEVA BREAKで上乗せし、通常のボーナス獲得は**150〜500枚**。初当たりは150枚が中心。
- CODE777: **777枚**の特殊獲得契機。
- 公式SANKYOオンライン博物館、HAZUSE、複数解析でAT純増約4.0枚/Gを照合。

## modeSpecificMinimumData
- 通常時は約50Gを1周期とする周期抽選型。
- CZスルー回数天井: **シナリオ間でCZ最大5スルー**。実際の選択は3/4/5回で設定差あり。
- CZ非当選天井: **1〜9周期でCZ非当選の場合、10周期目がEX状態**。
- 一般的な「○○G到達でAT確定」のゲーム数天井ではなく、周期/CZ回数管理の天井。

## resetBehavior
### settingChangeBehavior
- 設定変更時は**天井関連、ランクシナリオ、周期、有利区間をリセット**。
- スロパチネットでは設定変更時のステージを**外界ステージ**、メニュー画面シナリオ情報をクリアと掲載。
- 液晶ランク等の一部表示については資料に調査中表記が残るため、未確定部分を推測しない。

### carryOverBehavior
- 据え置き時は前日の周期/シナリオ進行が保持されるとみられ、朝一0Gで方向キー操作によりシナリオ履歴が表示されることが据え置き判別材料になる。
- 有利区間ランプが朝一も点灯なら据え置き濃厚（対策されていない場合）。
- 純電断と据え置きを完全に分離した全内部状態契約までは公開資料で固定できないため、その他は `UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION`。

### powerCycleBehavior
- 純電源OFF→ONでは**天井関連、有利区間、ランクシナリオ、周期を引き継ぐ**と複数解析で一致。
- スロパチネットではステージおよびメニュー画面シナリオ情報も引き継ぐと掲載。

### gameCounterReset
- 設定変更: 周期/CZ天井進行を**リセット**。
- 据え置き/純電断: 周期/CZ天井進行を**引き継ぎ**。

### ceilingAfterReset
- 設定変更で周期/CZ回数管理は0から再開。
- 通常時より短縮された専用ゲーム数天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- CZスルー天井自体の選択率（3/4/5回）は設定差があるが、リセット専用振り分けではないためreset numericとしては扱わない。

### modeAfterReset
- ランクシナリオは設定変更時にリセット、純電断時は引き継ぎ。
- 朝一専用シナリオや設定変更専用モード振り分けの公開固定値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset
- 周期/ランクシナリオ進行は設定変更でリセット、純電断で引継ぎ。
- ステージについてはスロパチネットに設定変更時外界ステージ、電断時引継ぎの記載あり。
- 液晶ランク等の細部は複数資料で調査中表記があり、完全契約は `PARTIAL_RESEARCH_EXHAUSTED`。

### advantageousSectionReset
- 設定変更: **リセット**。
- 純電源OFF→ON: **引き継ぎ**。
- 朝一有利区間ランプ点灯なら据え置き濃厚という判別材料あり。

### resetBenefits
- 設定変更で周期/CZ天井進行がリセットされるため、宵越し狙い上は前日ハマりを引き継がない。
- リセット専用の短縮天井、朝一AT当選率上昇等の明確な出玉恩恵は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 宵越し周期/CZスルー進行が消える点は、前日ハマり台を狙う客側には不利。
- その他の設定変更専用ペナルティは `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- **有利区間ランプ**: 朝一点灯なら据え置き濃厚。消灯は設定変更または前日AT後即ヤメ等の可能性があり、設定変更確定ではない。
- **シナリオ履歴**: 据え置き時は朝一0Gで方向キー操作によりシナリオ表が確認可能とする解析あり。
- 本機固有のリールガックン発生条件/率は検索語を変えて再探索したが固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### numericResetData
- resetShortenedCeiling: `NONE_CONFIRMED`
- resetMorningHitRate: `PUBLIC_VALUE_NOT_FOUND / NO_SPECIFIC_BENEFIT_CONFIRMED`
- resetModeDistribution: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- advantageousSectionLampDetection: `ON_AT_MORNING => CARRYOVER_LIKELY`（対策時を除く）
- gakkunRate: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`

## releaseDateDecision
- SANKYOオンライン博物館は2019年2月導入。
- フィールズ公式PV説明、HAZUSE、K-Navi、ALL7、複数解析が**2019-02-18**で一致するためcanonical採用。

## formalModel / certification
- HAZUSEで型式 **`SヱヴァンゲリヲンAT777F`**、検定番号 **`8S1123`** を確認。
- DMMぱちタウンには同機種について型式 **`SヱヴァンゲリヲンAT777F`** が掲載され整合。
- 一部二次資料に `SヱヴァンゲリヲンAT777SK` 表記があるため、型式表記競合として保持。

## missingFields
- 設定変更専用の朝一シナリオ振り分け/朝一初当たり率。
- 本機固有ガックン発生条件/率。
- 液晶ランク等、設定変更/純電断時の一部表示状態の完全契約。

## conflicts
- formalModelName: HAZUSE/DMMの `SヱヴァンゲリヲンAT777F` に対し、スロパチネットは `SヱヴァンゲリヲンAT777SK`。検定番号8S1123に紐づくHAZUSE表記をcanonicalとし、`CONFLICT_FORMAL_MODEL_F_VS_SK_SECONDARY` として保持。
- リセット時ステージについて、スロパチネットは「外界ステージ」と明記する一方、別解析は「調査中」表記。直接断定のある資料を保持しつつ `CONFLICT_RESET_STAGE_EXPLICIT_OUTSIDE_VS_OTHER_SOURCE_UNRESOLVED` とする。

## sources
取得日: 2026-09-11
1. SANKYOオンライン博物館 — https://www.sankyo-fever.jp/collection/888/ — 2019.02、ビスティ、エヴァシリーズ初6号機、AT純増約4.0枚/G、周期/CZ、BIG基本性能 — reliability: `OFFICIAL`
2. フィールズ公式YouTube PV — https://www.youtube.com/watch?v=CfKUGPR2mLA — 2019-02-18全国ホール導入予定 — reliability: `OFFICIAL`
3. HAZUSE — https://hazuse.com/machine/pachislot/8S1123/ — 型式SヱヴァンゲリヲンAT777F、検定8S1123、2019-02-18、設定別初当たり/合算、機械割、純増 — reliability: `ANALYSIS_HIGH_MACHINE_DB`
4. ちょんぼりすた — https://chonborista.com/slot/bisty-slot/73148/ — 天井、設定変更/電断時の天井・有利区間・ランクシナリオ・周期、朝一有利区間ランプ — reliability: `ANALYSIS_HIGH`
5. おスロおパチおいでやす — https://oslo-opachi.com/2019/02/19/post-4577/ — 2019-02-18、ベース50G、設定別スペック、朝一リセット表、据え置きシナリオ履歴 — reliability: `CONTEMPORARY_ANALYSIS`
6. スロパチネット — https://slopachi-net.com/eva777 — 設定変更/電断、有利区間、ステージ、シナリオ情報、型式SK表記 — reliability: `CONTEMPORARY_ANALYSIS`
7. K-Navi — https://p-kn.com/slot/3183/ — 2019-02-18、初当たり等のクロスチェック — reliability: `MACHINE_DB_CROSSCHECK`
8. ALL7 2019年2月導入予定一覧 — https://www.all7.jp/plans/index/2019/02 — 2/18導入群にエヴァAT777とGI優駿倶楽部2を掲載 — reliability: `INDUSTRY_LISTING`
9. DMMぱちタウン — https://p-town.dmm.com/machines/3363/shops — 2019-02-18、型式F、機械割、AT基本性能 — reliability: `MACHINE_DB_CROSSCHECK`

## confidence
- releaseDateCanonical: `OFFICIAL + ANALYSIS_HIGH + INDUSTRY_LISTING_CROSSCHECKED`
- formalModelName/certificationNumber: `ANALYSIS_HIGH_MACHINE_DB_WITH_SECONDARY_CONFLICT`
- performanceCore: `OFFICIAL + ANALYSIS_HIGH_CROSSCHECKED`
- resetBehaviorCore: `ANALYSIS_HIGH_CROSSCHECKED`
- resetDetection: `ANALYSIS_HIGH_PARTIAL`
- numericResetData: `PARTIAL_RESEARCH_EXHAUSTED`
