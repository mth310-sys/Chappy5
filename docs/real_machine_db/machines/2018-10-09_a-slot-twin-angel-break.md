# No.1235 A-SLOTツインエンジェルBREAK

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: A-SLOTツインエンジェルBREAK
- manufacturer: Sammy（製造元: ロデオ）
- releaseDateCanonical: 2018-10-09
- generation: 5.9号機
- systemType: A+RT / 技術介入 / ボーナス+CZ+RT
- formalModelName: `ツインエンジェルBREAK-A／ZR`
- certificationNumber: `8S0077`
- settings: `1 / 2 / 5 / 6`
- collectedAt: 2026-09-10

## releaseDateEvidence
- Sammy公式2018年製品ページで本機を確認。
- HAZUSE、K-Navi、一撃、ちょんぼりすた、すろぱちくえすとが2018-10-09導入で一致。
- グリーンべると2018-08-24発表記事は納品を10月予定としており、上記導入日と整合。
- canonical: `2018-10-09`。
- confidence: `OFFICIAL_PLUS_MULTIPLE_ANALYSIS_AND_PERIOD_INDUSTRY_CROSSCHECKED`。

## identificationEvidence
- HAZUSEが型式名 `ツインエンジェルBREAK-A／ZR`、検定番号 `8S0077`、メーカーSammy、導入開始日2018-10-09を同一ページで掲載。
- Sammy公式製品ページでは製造元を株式会社ロデオと明記。

## performanceCore
### payoutRateBySetting
公表値:
- setting1: 98.0%
- setting2: 99.5%
- setting5: 104.3%
- setting6: 108.1%

完全攻略時:
- setting1: 100.4%
- setting2: 101.9%
- setting5: 106.8%
- setting6: 110.6%

補助値（1枚役非取得・チェリー/カバン100%取得等の攻略条件）:
- setting1: 100.0%
- setting2: 101.5%
- setting5: 106.4%
- setting6: 110.2%

### initialHitBySetting
ボーナス合算:
- setting1: 1/159.8
- setting2: 1/154.6
- setting5: 1/143.7
- setting6: 1/132.1

内訳:
- SPECIAL BIG: S1 1/32768.0 / S2 1/16384.0 / S5 1/8192.0 / S6 1/4096.0
- HYPER BIG: S1 1/528.5 / S2 1/512.0 / S5 1/481.9 / S6 1/455.1
- N-BIG: S1 1/481.9 / S2 1/468.1 / S5 1/442.8 / S6 1/420.1
- MIDDLE BONUS: S1 1/442.8 / S2 1/431.2 / S5 1/399.6 / S6 1/364.1
- BIG合成: S1 1/250.1 / S2 1/240.9 / S5 1/224.4 / S6 1/207.4

### baseGamesPer50
- canonical comparison value: 約35G/50枚。
- パチマガスロマガ実測系: setting1 35.2G / setting6 35.5G。
- setting2 / setting5の設定別50枚ベースは今回直接固定せず、約35Gを物差し値として採用。

### netIncrease
- RT「エンジェルタイム」はリアルボーナス+RT機で、信頼できる主要資料は純増数値を `-` / 調査中としており、比較可能な枚/Gを固定できず `UNVERIFIED_AFTER_RESEARCH`。
- RT性能自体は1セット30G、終了後CZへ移行、RTループ率約50%。

### basicPayout
- SPECIAL BIG: 最大311枚 / RT突入期待度約80%。
- HYPER BIG: 最大259枚 / RT突入期待度約80%。
- BIG: 最大207枚 / RT突入期待度約50%。
- MIDDLE BONUS: 最大103枚 / RT突入期待度約50%。
- 全ボーナス後にCZ「DOKI☆DOKIゾーン」へ移行。

### ceiling
- 通常時のCZ間777G消化でCZ「DOKI☆DOKIゾーン」へ突入。
- ボーナス当選天井ではなく、CZ突入天井。
- RT中のゲーム数は通常時777Gの対象外とする解析あり。

## modeSpecificMinimumData
- ボーナス後はCZへ移行し、白7揃い等でRT「エンジェルタイム」へ突入。
- RTは1セット30G。30G終了後に再度CZへ入り、RTループ率は約50%。
- 通常演出モードはBREAK / ツインエンジェル3 / パトルンルンの3種選択式。
- 5.9号機A+RTであり、有利区間をAT/ART性能管理の中心に用いる機種ではない。resetBehavior上の有利区間項目は `N/A_NOT_APPLICABLE_TO_CORE_GAMEPLAY` とする。

## resetBehavior
### settingChangeBehavior
- CZ天井G数: `CARRY_OVER`。
- RT状態: `CARRY_OVER`。
- 液晶: BREAKモード、廊下or街ステージ、月表示は1～12月からランダム。
- マイスロ: `CARRY_OVER`。
- CZ中/RT中やボーナス後CZで設定変更しても見た目は通常時スタートになる。ただし内部RT状態は保持され、リプレイ成立でRT画面へ移行する解析を確認。
- canonical: `CZ_CEILING_AND_RT_STATE_CARRY_OVER_ON_SETTING_CHANGE_WITH_DISPLAY_REINITIALIZATION`。

### carryOverBehavior
- 据え置き時は前日CZ天井ゲーム数およびRT/CZ内部状態を引き継ぐ挙動を朝一解析で確認。
- 純電源OFF→ON資料ではRT/CZ画面が復帰するため、前日CZ/RT中閉店台では設定変更時との表示差が変更判別材料になる。
- canonical: `COUNTER_AND_RT_CZ_STATE_CARRY_OVER`。

### powerCycleBehavior
- CZ天井G数: `CARRY_OVER`。
- RT状態: `CARRY_OVER`。
- 液晶通常時: BREAKモード、廊下or街、月1～12月ランダム。
- RT中に電源OFF→ONした場合はRT中画面へ復帰。
- 非RT状態やボーナス後CZ中に電源OFF→ONした場合は電断前の液晶表示へ戻るとする一撃解析あり。
- マイスロ: `CARRY_OVER`。
- canonical: `COUNTER_RT_STATE_AND_MYSLO_CARRY_OVER_WITH_CONTEXTUAL_DISPLAY_RESTORE`。

### gameCounterReset
- 設定変更: `CARRY_OVER`。
- 据え置き: `CARRY_OVER`。
- 純電源OFF→ON: `CARRY_OVER`。
- 対象はCZ間777Gカウンター。通常ゲーム数777GでCZへ入るため、ボーナス天井と混同しない。

### ceilingAfterReset
- 設定変更専用短縮: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更でもCZ天井ゲーム数自体を引き継ぐため、前日ハマリは朝一狙い要素になり得る。
- 公開天井数値: `CZ間777G`。

### modeAfterReset
- 内部RT状態は設定変更でも引き継ぐ。
- 液晶演出モードは設定変更/通常電断復帰の通常表示ではBREAKモードへ戻る資料あり。
- 朝一専用の内部モード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`。

### stateAfterReset
- RT/CZに関わる内部状態は設定変更時にも保持される。
- 設定変更時は画面だけ通常時に見えるケースがあるため、表示状態と内部RT状態を分離して記録。
- 純電断ではRT中ならRT画面へ戻り、CZ中なども電断前画面へ復帰する直接資料あり。

### advantageousSectionReset
- `N/A_NOT_APPLICABLE_TO_CORE_GAMEPLAY`。
- 本機は5.9号機A+RTで、今回の物差し用途では有利区間リセットを朝一性能の主要変数として扱う公開資料を確認していない。

### resetBenefits
- 設定変更でもCZ天井G数とRT状態が引き継がれるため、前日CZ間ハマリやRT/CZ内部状態が消えないことが客側の朝一狙い要素になり得る。
- 前日RT/CZ中閉店の場合、設定変更後でも内部状態が残り、リプレイ成立でRTへ復帰するケースがある。
- 一律の設定変更専用当選率アップ等: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更専用の明示的不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 前日CZ/RT中閉店台が主要判別ポイント。
- 設定変更時: 内部RT/CZ状態を引き継ぎつつ、見た目は通常時画面から開始することがある。
- 純電源OFF→ON/据え置き: CZ・RT画面を引き継ぐ資料があり、この状況では表示差から設定変更を推測可能。
- ただしホール側の対策や閉店時状態に依存し、通常状態からの一律判別法ではない。
- リールガックンによる本機固有の確定的変更判別条件/発生率: `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- CZ天井: 通常時CZ間777G。
- 設定変更時CZ天井短縮値: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更時専用モード振り分け/当選率/恩恵発生率: `NONE_CONFIRMED_AFTER_RESEARCH`。
- ガックン発生率: `UNVERIFIED_AFTER_RESEARCH`。

## conflicts
- 性能コア主要値に重大なCONFLICTは現時点でなし。
- 「SBB+HBB合成」と「BIG合成」を別定義として掲載する資料があるため、同一指標として混合しない。本レコードではSBB/HBB/N-BIG/MBの個別値と全ボーナス合算を優先保持。
- 設定変更と電源OFF→ONはいずれもCZ天井/RT状態を引き継ぐが、画面復帰挙動が異なるケースがあるため同義扱いしない。

## missingFields
- RT「エンジェルタイム」の信頼できる比較可能な純増枚/G数値。
- setting2 / setting5の設定別50枚ベースの高信頼直接値。
- 通常状態から使えるリールガックン等の確定的設定変更判別条件/発生率。
- 設定変更専用の朝一モード振り分け・当選率・恩恵発生率（存在を示す公開値なし）。

## sources
取得日: 2026-09-10

1. Sammy公式 — https://www.sammy.co.jp/japanese/product/pachislot/2018/twinangelbreak_Aslot/
   - 公式製品ページ、製造元ロデオ。
2. Sammy 2018年製品一覧 — https://www.sammy.co.jp/japanese/products/pachislot/2018/index.html
   - 2018年製品としてA-SLOTツインエンジェルBREAKを確認。
3. HAZUSE — https://hazuse.com/machine/pachislot/8S0077/
   - 型式、検定番号、導入日、メーカー、ボーナス確率、機械割、ゲーム性、CZ天井・設定変更/電源ON-OFF挙動。
4. 一撃 基本 — https://1geki.jp/slot/s_aslo_twinbreak/
   - 導入日、4種ボーナス獲得枚数、CZ/RT基本性能。
5. 一撃 天井/設定変更 — https://1geki.jp/slot/s_aslo_twinbreak/3/
   - CZ間777G、設定変更時/電源OFF→ON時のCZ天井・RT状態・液晶・マイスロ挙動。
6. ちょんぼりすた — https://chonborista.com/slot/sammy-slot/63259/
   - 約35G/50枚、詳細ボーナス確率、通常/完全攻略機械割、朝一RT/CZ表示差。
7. K-Navi — https://p-kn.com/slot/3078/
   - 2018-10-09導入、4種ボーナス最大獲得枚数、RT/CZ概要。
8. すろぱちくえすと — https://www.slopachi-quest.com/article/twin-angel-break-atype/
   - 5.9号機A+RT、約35G/50枚、詳細確率、完全攻略機械割、CZ天井、RT30G/約50%ループ。
9. パチマガスロマガ 小役確率 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/169/c.php
   - 50枚あたり setting1 35.2G / setting6 35.5G。
10. グリーンべると — https://web-greenbelt.jp/00010686/
   - 2018-08-24の業界発表、A+RT、設定1ボーナス合算1/159.8、最大311/259/207/103枚、RT期待度、10月納品予定。
11. 2-9伝説 導入一覧 — https://29den.com/newslot/
   - 2018-10-01 HEY！鏡、2018-10-09 A-SLOTツインエンジェルBREAK、2018-10-15 大海物語4 withすーぱーそに子/ツインドラゴンハナハナの時系列境界確認。

## confidenceSummary
- identification/release: `OFFICIAL + ANALYSIS_HIGH + INDUSTRY`
- payout/bonus probability/basic payout: `ANALYSIS_HIGH_MULTIPLE_CROSSCHECKED`
- baseGamesPer50: `ANALYSIS_HIGH`（約35G、S1/S6実測補助値あり）
- resetBehavior settingChange/powerCycle: `ANALYSIS_HIGH_MULTIPLE_CROSSCHECKED`
- resetDetection: `ANALYSIS_HIGH_CONDITIONAL`
- RT netIncrease: `UNVERIFIED_AFTER_RESEARCH`
