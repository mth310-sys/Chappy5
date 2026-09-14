# Lアクダマドライブ

recordNo: 1785
machineName: Lアクダマドライブ
aliases: スマスロ アクダマドライブ / アクダマドライブ / LアクダマドライブTP
manufacturer: サンスリー製造 / 三洋販売・SANYO
formalModel: LアクダマドライブTP
inspectionCode: 530756
releaseDate: 2026-04-06
generation: 6.5号機 / スマスロ
systemType: AT / 疑似ボーナス+STループ / 高純増ゲーム数上乗せAT
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE_WITH_RESET_RESEARCH

## releaseAndModelEvidence
- 遊技通信・遊技日本で、三洋販売発表、サンスリー製、型式 `LアクダマドライブTP`、2026-04-06導入予定を確認。
- HAZUSEで型式 `LアクダマドライブTP`、検定番号 `530756`、導入開始日2026-04-06を確認。
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.4%
- setting2: 98.2%
- setting3: 100.1%
- setting4: 104.1%
- setting5: 107.3%
- setting6: 112.0%
initialHitBySetting:
  bonus:
  - setting1: 1/321.2
  - setting2: 1/319.3
  - setting3: 1/315.8
  - setting4: 1/307.0
  - setting5: 1/296.9
  - setting6: 1/291.1
  at:
  - setting1: 1/555.5
  - setting2: 1/550.7
  - setting3: 1/543.6
  - setting4: 1/517.8
  - setting5: 1/487.7
  - setting6: 1/472.0
  cz:
  - setting1: 1/166.1
  - setting2: 1/165.3
  - setting3: 1/163.8
  - setting4: 1/159.3
  - setting5: 1/154.8
  - setting6: 1/152.1
baseGamesPer50: 約31G/50枚（30.8〜31.0G表記）
netIncrease: AT約7.1枚/G（ブーストゾーン中約7.4枚/G）
basicPayout:
- アクダマBONUS: 平均約90枚
- エピソードBONUS: 平均約169枚、AT以上濃厚
- AT「アクダマドライブ」: 初回30G+α、2連目以降20G+α、終了後STへ
modeSpecificMinimumData:
- 通常BONUS間天井: 967G+α、最大24G前兆後BONUS
- STスルー天井: 規定2/4/6回、次回BONUSがエピソードBONUSへ書換え。振分2回33.6% / 4回33.6% / 6回32.8%
- 745G以上経過後BONUSでAT非当選時、または超S級デッドオアアライブ後は589G+αへ短縮
confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_CONFLICT_ON_RESET_GAME_CEILING
resetQaLastUpdated: 2026-09-15

### settingChangeBehavior
- 設定変更時、BONUS/STスルー進行は初期化され、スルー回数天井は2/4/6回から新規抽選される。
- 必勝本でスルー回数天井が「設定変更時・ST終了時に抽選」、振分2回33.6% / 4回33.6% / 6回32.8%を直接確認。
- なな徹では設定変更時に「カンサイ教育番組」当選率が優遇され、「処刑課バトル」天井が最大5セット目へ短縮される。
- ゲーム数天井については資料競合あり。なな徹は設定変更時も最大967G+αで短縮なし。1geki/パチビーの短縮条件も上位ST後または745G以上経過後BONUS→AT非当選で、設定変更単独を589G条件としていない。一方、6確等一部二次資料は設定変更後589G+αと掲載。canonicalは高優先資料側の967G+αを採用し、異説をCONFLICT保持。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_WITH_CONFLICT

### carryOverBehavior
- 据え置き時のゲーム数天井・STスルー回数・CZモード等の機種固有直接比較表は高優先資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一部二次資料は電源OFF→ONで天井・スルー回数引継ぎとするため、据え置きも同様である可能性は高いが、一般論で自動確定しない。
confidence: UNVERIFIED_FOR_DIRECT_CARRYOVER_WORDING

### powerCycleBehavior
- 二次解析では純電源OFF→ONでBONUS間天井およびSTスルー回数を引き継ぐとされる。
- 高優先の機種固有比較表による独立再確認は不足するため `SECONDARY_SUPPORTED` とする。
confidence: ANALYSIS_SINGLE / SECONDARY_SUPPORTED

### gameCounterReset
settingChange: RESET
carryOver: UNVERIFIED_DIRECT
powerCycle: CARRY_OVER_SECONDARY_SUPPORTED
notes:
- 設定変更後のBONUS間ゲーム数自体は初期化。ただし設定変更後の新規天井値が967G+αか589G+αかは資料競合があり、canonicalは967G+α。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE / SECONDARY_SUPPORTED_FOR_POWER_CYCLE

### ceilingAfterReset
normalCeiling: 967G+α
resetCeilingCanonical: 967G+α
resetCeilingConflictAlternative: 589G+α
resetShorteningCanonical: NONE_FOR_SETTING_CHANGE_ALONE
other589Conditions: 超S級デッドオアアライブ後 / 745G以上経過後BONUSでAT非当選
confidence: CONFLICT_RESOLVED_TO_HIGHER_PRIORITY_CANONICAL

### modeAfterReset
- CZモードの設定変更時詳細値は高優先資料で未固定。
- 二次資料にCZモードA 89.8%開始との値があるが、高優先独立照合不足のため参考値扱い。
- STスルー回数天井は設定変更時に2/4/6回から再抽選。
confidence: ANALYSIS_HIGH_FOR_ST_SKIP_CEILING / SECONDARY_FOR_CZ_MODE

### stateAfterReset
- 設定変更時、ボーナス初当たりまで111G・333G・666G到達時の「カンサイ教育番組」当選率が優遇。
- 通常の高確/低確等を含む内部状態全体の設定変更/据え置き/電断契約は `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_BENEFIT / UNVERIFIED_FOR_FULL_INTERNAL_STATE

### advantageousSectionReset
- スマスロのため設定変更時に有利区間が再設定される旨を述べる二次資料はあるが、機種固有の高優先直接資料で設定変更/据え置き/純電断三者比較を固定できず `SECONDARY_SUPPORTED`。
confidence: ANALYSIS_SINGLE / SECONDARY_SUPPORTED

### resetBenefits
- ボーナス初当たりまで「カンサイ教育番組」当選率アップ。
- 「処刑課バトル」ATセット継続天井が通常最大7セット目から最大5セット目へ短縮。
- STスルー回数天井を2/4/6回から再抽選。
confidence: ANALYSIS_HIGH

### resetPenalties
- 設定変更専用の主要な公開不利要素は十分な再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH

### resetDetection
- 本機固有のガックン条件・発生率、設定変更確定となるランプ/表示挙動は、機種名・型式・メーカーと「ガックン/設定変更/据え置き/朝一」を組み替え再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 朝一の天井挙動は設定変更単独の天井短縮がcanonicalでは否定されるため、589G超過のみで据え置き確定とは扱わない。
confidence: UNVERIFIED_FOR_MACHINE_SPECIFIC_DETECTION

### numericResetData
resetBonusCeilingCanonical: 967G+α
resetBonusCeilingConflictAlternative: 589G+α
stSkipCeilingDistributionOnSettingChange:
- 2回: 33.6%
- 4回: 33.6%
- 6回: 32.8%
resetKansaiEducationProgram: HIT_RATE_UP
resetExecutionDivisionBattleCeiling: MAX_5_AT_SETS
referenceOnlyCzModeAStart: 89.8% (SECONDARY_ONLY)
confidence: ANALYSIS_HIGH / CONFLICT_FOR_GAME_CEILING

## conflicts
- `RESET_GAME_CEILING_967_VS_589`: なな徹は設定変更時も最大967G+α・短縮なし。1gekiとパチビーの589G短縮条件も上位ST後/745G以上経過後BONUSでAT非当選時のみ。一方、6確・一部二次整理資料は設定変更後589G+αと掲載。高優先かつ条件記述が具体的な前者をcanonicalとし、589G説はCONFLICTとして残す。
- メーカー表記はSANYO/三洋物産/三洋販売/サンスリーが混在。業界一次資料でサンスリー製・三洋販売発表を確認し `サンスリー製造 / 三洋販売・SANYO` と正規化。

## sources
retrievedAt: 2026-09-15
- 遊技通信/P-WORLD業界ニュース: https://news.p-world.co.jp/articles/32692/yugitsushin
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-74982/
- 情報島: https://p-johojima.jp/new_machine/post-23257/
- HAZUSE機種詳細: https://hazuse.com/hd/530756h/
- HAZUSE解析: https://hazuse.com/machine/pachislot/SX0124/
- 必勝本 基本スペック: https://hisshobon.com/machineinfo/89273/
- 必勝本 スルー回数天井: https://hisshobon.com/machineinfo/89283/
- 必勝本 AT解説: https://hisshobon.com/machineinfo/89285/
- 1geki 天井・朝一: https://1geki.jp/slot/l_akudama_drive/3/
- なな徹 朝一・リセット: https://nana-press.com/kaiseki/machine/1109/36235/
- なな徹 AT: https://nana-press.com/kaiseki/machine/1109/36250/
- パチビー攻略: https://www.pachibee.jp/machines/kouryaku/226030002
- 6確: https://www.kaku6.jp/slot/akudamadrive/
- スロベース reset: https://slobase.jp/articles/akudama-drive-reset

## missingFields
- 据え置き時の天井・STスルー・内部状態の高優先機種固有直接比較: UNVERIFIED_AFTER_RESEARCH
- 純電源OFF→ONの高優先機種固有直接比較表: SECONDARY_SUPPORTED_ONLY
- 有利区間三者契約の高優先直接資料: UNVERIFIED_HIGH_PRIORITY / SECONDARY_SUPPORTED
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- CZモードA 89.8%の高優先独立照合: SECONDARY_ONLY

## qaNotes
- 実機完全再現用の全小役確率、全CZ内部抽選、全状態移行テーブル、演出期待度は収集対象外。
- 2026-04-06群6機の2/6として処理。次はスマスロヨルムンガンド。
- 既存COMPLETE_COREの性能完了判定は変更していない。reset QAは別管理。
