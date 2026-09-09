machineName: SLOTデビルマンχ
manufacturer: エレコ（ユニバーサルエンターテインメント系列）
releaseDate: 2017-09-04
recordNumber: 1131
generation: 5号機（5.5号機世代）
systemType: A+ART / セットストック型
formalModelName: SLOTデビルマンχDA
certificationNumber: 7S0565
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSEとパチビーは導入開始日を **2017-09-04** と記録。
- K-Navi、ちょんぼりすた、すろかいは **2017-09-19** と記録しており導入日競合あり。本DBの時系列canonicalは9/4系資料を採用し、9/19をCONFLICTとして保持する。
- 型式名 **SLOTデビルマンχDA**、検定番号 **7S0565** はHAZUSEで直接確認。
reliability: ANALYSIS_HIGH_FOR_IDENTITY / CONFLICT_FOR_RELEASE_DATE

## payoutRateBySetting
- 設定1: **98.4%**
- 設定2: **99.0%**
- 設定3: **101.0%**
- 設定4: **104.1%**
- 設定5: **109.0%**
- 設定6: **115.2%**
- ちょんぼりすた、すろかい等で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### ART「アーマゲドン」初当たり
- 設定1: **1/566.2**
- 設定2: **1/554.0**
- 設定3: **1/542.4**
- 設定4: **1/486.2**
- 設定5: **1/509.1**
- 設定6: **1/387.3**

### ボーナス合算
- 設定1: **1/299.3**
- 設定2: **1/299.3**
- 設定3: **1/284.9**
- 設定4: **1/284.9**
- 設定5: **1/265.3**
- 設定6: **1/265.3**
- アモンボーナスは全設定共通 **1/16384.0**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- 代表値 **約32.6G/50枚**。
- 当時解析では約32.6〜32.9G/50枚の記載あり。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART単体純増: **約1.4枚/G**。
- ボーナス込み: **約2.0枚/G**。
- 遊技日本の業界記事、パチビー、複数解析で照合。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- デビルボーナス: **210枚**。
- アモンボーナス: **210枚**。
- ART「アーマゲドン」: **1セット50G**、セットストック型。
- 「妖鳥襲来」は次回ボーナスまで継続する無限ART。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時はモードA/Bの内部モードを持ち、モードBからART当選時は「妖鳥襲来」選択率が優遇される解析あり。
- 特殊高確「魔界状態」は10G継続し、滞在中のボーナス当選でART濃厚。
- 通常時天井は **1280G** 到達で前兆を経由してART。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_SETTING_CHANGE_AND_POWER_CYCLE_COMPARISON
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時: **天井ゲーム数RESET / 内部状態再抽選 / 液晶は街or学校ステージ**。
- 必勝本の「設定変更 / 電源OFF・ON」直接比較表で確認。
reliability: ANALYSIS_HIGH_DIRECT_COMPARISON

### carryOverBehavior
- 設定据え置きでは前日までの天井進行・内部状態を維持する挙動が、純電源OFF→ON時のCARRYOVER契約から支持される。
- ただし「設定据え置き・電源操作なし」を独立列で明記する本機固有資料は固定できず、操作分離は **UNVERIFIED_DIRECT_OPERATION_ISOLATION_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_POWER_CYCLE_CARRYOVER / UNVERIFIED_FOR_OPERATION_ISOLATION

### powerCycleBehavior
- 純電源OFF→ON: **天井ゲーム数CARRYOVER / 内部状態CARRYOVER**。
- 通常時の液晶は街or学校ステージへ。ボーナス・ART中の電断はその状態を引き継ぐと必勝本が明記。
reliability: ANALYSIS_HIGH_DIRECT_COMPARISON

### gameCounterReset
- 設定変更: **RESET**。
- 純電源OFF→ON: **CARRYOVER**。
reliability: ANALYSIS_HIGH_DIRECT_COMPARISON

### ceilingAfterReset
- 通常天井 **1280G**。
- 設定変更後の専用短縮天井は、検索語・資料系統を変えて再探索したが確認できず **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_NORMAL_CEILING / UNVERIFIED_FOR_ANY_HIDDEN_RESET_SHORTENING

### modeAfterReset
- モードA/Bを持つことは確認できるが、設定変更時のモード振り分け・再抽選契約を直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: UNVERIFIED

### stateAfterReset
- 設定変更: **再抽選**。
- 純電源OFF→ON: **CARRYOVER**。
- 設定変更時の具体的な状態振り分け数値は十分な再探索後も固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_DIRECT_FOR_BEHAVIOR / UNVERIFIED_FOR_NUMERIC_DISTRIBUTION

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時専用の固定短縮天井や公開された高確スタート率は確認できず **NONE_CONFIRMED_AFTER_RESEARCH**。
- 一方、設定変更後1回目のデビルボーナスでは専用の設定示唆セリフ振り分けが存在し、朝一の変更推測に利用可能。
reliability: ANALYSIS_HIGH_FOR_FIRST_BONUS_RESET_SIGNAL

### resetPenalties
- 設定変更により前日の天井進行・内部状態は失われる。
- 固有の数値的不利要素は **NO_NUMERIC_PENALTY_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_RESET_CONTRACT

### resetDetection
- デビルボーナス中に逆押しで所定の技術介入を3回成功させた際のボイスで、デビルマン「**デビルマンの力を教えてやる**」が **設定変更示唆**。
- このボイスは「設定変更後1回目のデビルボーナス」専用振り分けとしてHAZUSE/複数解析に掲載され、2回目以降の表では非搭載。したがって朝一変更推測の強い材料だが、発生しない設定変更もあるため非出現で据え置き確定とはならない。
- 本機固有のガックン発生率/確定契約は検索語を変えて再探索後も固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_RESET_VOICE / UNVERIFIED_FOR_GAKKUN

### numericResetData
- normalCeiling: **1280G**
- settingChangeCeiling: **1280G（専用短縮確認なし）**
- firstDevilBonusResetVoice: **「デビルマンの力を教えてやる」=設定変更示唆**
- stateDistributionAfterSettingChange: **UNVERIFIED_AFTER_RESEARCH**

## conflicts
- releaseDate: **2017-09-04 vs 2017-09-19**。HAZUSE・パチビー・2017年導入カレンダーは9/4、K-Navi・ちょんぼりすた・すろかいは9/19。業界記事は「9月予定」までで日付を確定しない。本DBでは9/4をchronological canonicalとし、9/19をCONFLICTとして保持。
- 天井表現は資料に「通常時1280G」「ART終了後、ボーナス間1280G」等の表現差がある。ゲーム内物差し用途では1280G天井という共通部分のみcanonicalとし、詳細内部カウント仕様へ拡張しない。

## missingFields
- 設定変更時のモードA/B振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更時の内部状態具体値: **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き・電源操作なしを独立させた本機固有契約: **UNVERIFIED_DIRECT_OPERATION_ISOLATION_AFTER_RESEARCH**。
- ガックンの本機固有確定契約/発生率: **UNVERIFIED_AFTER_RESEARCH**。

## sources
取得日: 2026-09-09
- HAZUSE 基本/型式/検定/導入日: https://hazuse.com/machine/pachislot/7S0565/
- HAZUSE 設定推測/設定変更示唆ボイス: https://hazuse.com/machine/pachislot/7S0565/genre/208/
- HAZUSE ART/内部状態: https://hazuse.com/machine/pachislot/7S0565/genre/209/
- パチビー 基本スペック/導入日/ART構造: https://www.pachibee.jp/machines/index/217080024
- 遊技日本 業界記事/ART・ボーナス性能: https://yugi-nippon.com/pachinko-new-machine/post-14308/
- グリーンべると 業界記事/ボーナス・ART確率: https://web-greenbelt.jp/00009901/
- 必勝本 天井&設定変更/電源OFF ON比較: https://p.hisshobon.jp/machine/3047/1/66209
- 必勝本 システム解説: https://p.hisshobon.jp/machine/3047/1/66088
- ちょんぼりすた スペック/ベース/導入日別資料: https://chonborista.com/slot/universal-slot/45302/
- すろぱちくえすと スペック/天井: https://www.slopachi-quest.com/article/devilman-%CF%87/
- K-Navi 導入日: https://p-kn.com/slot/2881/
- すろかい スペック/ベース/導入日: https://slotkaiseki.hatenablog.com/entry/2017/08/16/153259
