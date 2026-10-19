# スマスロ ストリートファイターV 挑戦者の道

recordNo: 1655
machineName: スマスロ ストリートファイターV 挑戦者の道
aliases: スマスロ ストリートファイターⅤ 挑戦者の道 / スマスロ スト5 / Lストリートファイター5
manufacturer: エンターライズ
formalModel: Lストリートファイター5ZD
inspectionCode: 4S0055
releaseDate: 2024-06-03
generation: 6.5号機 / スマスロ
systemType: AT / 疑似ボーナス主体・技術介入型
settings: 1 / 2 / 3 / 4 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- HAZUSE、K-Navi、1gekiが2024-06-03導入開始で一致。
- P-Summaの2024年6月新台整理でも6月3日導入5機の1機として確認。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modelEvidence
- 業界発表で製造元エンターライズ、型式 `Lストリートファイター5ZD` を確認。
- HAZUSEで型式 `Lストリートファイター5ZD`、検定番号 `4S0055` を確認。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- marketPredicted:
  - setting1: 97.7%
  - setting2: 98.3%
  - setting3: 99.6%
  - setting4: 101.0%
  - setting5: 102.8%
  - setting6: 105.3%
- fullStrategy:
  - setting1: 103.4%
  - setting2: 104.0%
  - setting3: 105.2%
  - setting4: 106.6%
  - setting5: 108.1%
  - setting6: 110.6%
initialHitBySetting:
- battleBonus:
  - setting1: 1/296.9
  - setting2: 1/291.8
  - setting3: 1/280.8
  - setting4: 1/268.3
  - setting5: 1/254.3
  - setting6: 1/234.5
- barrelBonus:
  - setting1: 1/363.2
  - setting2: 1/361.1
  - setting3: 1/353.8
  - setting4: 1/347.8
  - setting5: 1/338.6
  - setting6: 1/323.1
- bonusCombined:
  - setting1: 1/163.3
  - setting2: 1/161.4
  - setting3: 1/156.6
  - setting4: 1/151.5
  - setting5: 1/145.2
  - setting6: 1/135.9
baseGamesPer50: 約35G/50枚
netIncrease:
- 疑似ボーナスAT: 約3.6枚/G
basicPayout:
- BATTLE BONUS: 平均約400枚（平均JAC約4回、1バトル/JAC約106枚目安）
- 樽BONUS: 約106枚
- BATTLE BONUS 影: 平均約1350枚
- 瞬獄乱舞: 期待獲得1300枚超級の特化契機として業界資料に掲載
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は成立役や内部状態に応じてミッションを抽選し、突破でボーナスへ。
- 通常/高確/超高確などの内部状態があり、別軸で「波動高確」がミッション抽選に影響する。
- BATTLE BONUSは技術介入の成否を含むプレイヤースキルで獲得性能が変わるため、市場想定機械割と完全攻略時機械割を分離して保存する。
- 天井機能は非搭載。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_POWER_CYCLE_ADVANTAGEOUS_SECTION_AND_GAKKUN_UNVERIFIED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間RESET。
- 内部状態をRESET/再抽選。
- 波動高確をRESET。
- ミッションモードを再抽選。
- 実戦上は道場ステージから開始。
- 天井機能は非搭載のため、設定変更による天井短縮・ゲーム数天井リセット恩恵はN/A。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVERを機種別朝一資料で確認。
- 内部状態はCARRY_OVER。
- 据え置き時の波動高確・ミッションモード個別契約は、純電源OFF→ONでは引継ぎが明記される一方、据え置き専用比較表としての直接表記は今回固定できず、一般論で補完しない。
confidence: ANALYSIS_HIGH_FOR_ADVANTAGEOUS_SECTION_AND_STATE / UNVERIFIED_FOR_STATIONARY_WAVE_AND_MISSION_COMPONENTS

### powerCycleBehavior
- 純電源OFF→ONでは内部状態CARRY_OVER。
- 波動高確CARRY_OVER。
- ミッションモードCARRY_OVER。
- 開始ステージは1geki・ちょんぼりすた系整理では道場ステージ、一方で必勝本の設定変更比較ページは電源OFF→ON側を「現在調査中」としているため、表示復帰はCONFLICT扱いで保持。
- 純電源OFF→ON単独時の有利区間契約を直接明記した機種専用資料は再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_STATE_WAVE_MISSION / CONFLICT_FOR_STAGE / UNVERIFIED_FOR_ADVANTAGEOUS_SECTION

### gameCounterReset
- 天井機能非搭載のため、天井到達を左右するゲーム数カウンタのRESET/CARRY_OVERはN/A。
- 液晶上の表示ゲーム数を変更判別へ使える固定仕様は確認できず、推測補完しない。
confidence: ANALYSIS_HIGH_FOR_NO_CEILING / UNVERIFIED_FOR_DISPLAY_COUNTER

### ceilingAfterReset
- 通常時天井: N/A（天井機能非搭載）。
- 設定変更後短縮天井: N/A。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時/有利区間移行時にミッションモードを再抽選。
- 公開振り分け: 通常A 50.0% / 通常B 37.5% / バトル 11.7% / 強バトル 0.4% / 豪鬼バトル 0.4%。
- 上位ミッションモードほど期待度の高いミッションが選ばれやすい。
- 純電源OFF→ONではミッションモードCARRY_OVER。
- 据え置き単独のミッションモード直接比較表は再探索後も固定できず、内部状態CARRY_OVERと混同せず `UNVERIFIED_FOR_STATIONARY_COMPONENT_SPECIFIC_CONTRACT` を残す。
confidence: ANALYSIS_HIGH_FOR_RESET_DISTRIBUTION_AND_POWER_CYCLE / UNVERIFIED_FOR_STATIONARY_COMPONENT_SPECIFIC_CONTRACT

### stateAfterReset
- 設定変更: 内部状態RESET/再抽選、波動高確RESET。
- 据え置き: 内部状態CARRY_OVER。
- 純電源OFF→ON: 内部状態・波動高確CARRY_OVER。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き時: CARRY_OVER。
- 設定変更時を含む有利区間移行時はミッションモード抽選を実施。
- 純電源OFF→ONのみの場合の有利区間契約は、機種専用の直接資料を十分に再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_STATIONARY / UNVERIFIED_FOR_POWER_CYCLE

### resetBenefits
- 設定変更時はミッションモードを新規抽選し、通常A 50.0%、通常B 37.5%、バトル 11.7%、強バトル 0.4%、豪鬼バトル 0.4%。
- 上位モードを引けば朝一から期待度の高いミッションに期待できる。
- 天井非搭載のため、短縮天井・朝一天井狙いの固定恩恵は存在しない。
- 朝一○G以内の固定ボーナス当選率など、別の公開固定値は再探索後も確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_MODE_DRAW / UNVERIFIED_FOR_OTHER_FIXED_MORNING_VALUES

### resetPenalties
- 設定変更により前日の内部状態・波動高確を失う。
- 前日が有利な内部状態であった場合は据え置きより不利になり得る一方、新規ミッションモード抽選で上位モードを得る可能性もあるため、一律の朝一不利とは扱わない。
- 固定的なリセット損失率/期待値は公開固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_CONTRACT / UNVERIFIED_FOR_FIXED_PENALTY_VALUE

### resetDetection
- なな徹の朝一比較では設定変更・据え置きとも開始ステージは道場で、開始ステージ単独では変更判別に使えない。
- 1gekiも設定変更時は道場、電源OFF→ON時も道場としている。
- 本機固有のリールガックン条件/発生率は、機種名・型式名・エンターライズ・ストリートファイターV/5・設定変更/リセット/朝一/据え置き/電源OFF ON/ガックンへ検索語を変え、主要攻略・旧DB系まで再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井非搭載のため天井到達位置を用いた変更判別は不可。
confidence: ANALYSIS_HIGH_FOR_STAGE_NON_DETECTION / UNVERIFIED_FOR_GAKKUN

### numericResetData
- ミッションモード設定変更時振り分け:
  - 通常A: 50.0%
  - 通常B: 37.5%
  - バトル: 11.7%
  - 強バトル: 0.4%
  - 豪鬼バトル: 0.4%
- 設定変更後短縮天井: N/A（天井非搭載）
- 朝一特定G以内当選率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## conflicts
- 市場想定機械割は必勝本・HAZUSE・1gekiで `97.7 / 98.3 / 99.6 / 101.0 / 102.8 / 105.3%` が一致する一方、ちょんぼりすた系および一部転載整理で設定3〜6を `102.6 / 104.0 / 105.7 / 108.2%` とする表がある。定義差の可能性を排除できないため平均せず、前者を「市場予想値」、完全攻略 `103.4 / 104.0 / 105.2 / 106.6 / 108.1 / 110.6%` と分離してcanonical保持。`CONFLICT_MARKET_PAYOUT_SETTINGS3_TO_6`。
- 純電源OFF→ON時の開始ステージは、1geki等が道場とする一方、必勝本は現在調査中。多数側を参考表示としつつ `CONFLICT_POWER_CYCLE_START_STAGE` を保持。

## missingFields
- 純電源OFF→ON単独時の有利区間契約: UNVERIFIED_AFTER_RESEARCH
- 据え置き時の波動高確・ミッションモード個別契約を直接表記した比較資料: UNVERIFIED_AFTER_RESEARCH
- 本機固有リールガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 朝一特定G以内の固定ボーナス当選率/固定期待度: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 固定的なリセット不利率/損失期待値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-14

### 業界 / 型式 / 導入
- P-WORLD NEWS / 遊技日本 — エンターライズ発表・型式・6月導入予定: https://news.p-world.co.jp/articles/27230/nippon
- P-WORLD NEWS / 遊技通信 — 製品説明・BATTLE BONUS等: https://news.p-world.co.jp/articles/27655/nippon
- HAZUSE — 型式/検定番号/導入日/スペック: https://hazuse.com/machine/pachislot/4S0055/
- K-Navi — 導入日・ボーナス確率・機械割: https://p-kn.com/slot/4152/
- P-WORLD — 機種DB: https://www.p-world.co.jp/machine/database/10052

### 性能コア / 技術介入
- パチ&スロ必勝本 — 基本スペック/完全攻略関連: https://p.hisshobon.jp/vpage/2628/3
- 1geki — 機種トップ/基本スペック: https://1geki.jp/slot/l_sfvc/
- P-Summa — 導入・技術介入/スペック整理: https://psumma.jp/pachislo/61534/

### resetBehavior
- なな徹 — 朝一・設定変更、有利区間、ミッションモード振り分け: https://nana-press.com/kaiseki/machine/758/21741/
- パチ&スロ必勝本 — 天井&設定変更、設定変更/電源OFF→ON比較: https://p.hisshobon.jp/machine/4318/1/102612
- 1geki — 天井/朝一/設定変更/電源OFF→ON: https://1geki.jp/slot/l_sfvc/3/

### 2024-06境界監査
- P-Summa — 2024年6月新台5機、全て6/3導入: https://psumma.jp/pachislo/61472/
- 1geki — 2024年7月新台カレンダー（次の全国導入候補確認）: https://1geki.jp/newmachinecalender/202407/
