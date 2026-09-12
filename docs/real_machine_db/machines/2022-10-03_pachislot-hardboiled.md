# パチスロハードボイルド

recordNo: 1523
machineName: パチスロハードボイルド
manufacturer: タイヨーエレック（製造） / サミー
formalModel: S ハードボイルド XX
inspectionCode: 2S0375
releaseDate: 2022-10-03
generation: 6.5号機
systemType: A300+AT / 疑似ボーナス＋完走型セットAT / 技術介入機

## payoutRateBySetting
### 市場予想値
- 設定1: 97.9%
- 設定2: 98.3%
- 設定3: 100.2%
- 設定4: 103.4%
- 設定5: 106.4%
- 設定6: 107.8%

### 完全攻略時
- 設定1: 100.2%
- 設定2: 100.8%
- 設定3: 102.7%
- 設定4: 105.9%
- 設定5: 109.1%
- 設定6: 110.5%

市場予想値と完全攻略値は定義が異なるため別系列で保持し、平均化しない。

信頼度: INDUSTRY / ANALYSIS_HIGH

## initialHitBySetting
### BIG合成
- 設定1: 1/330.1
- 設定2: 1/328.8
- 設定3: 1/317.9
- 設定4: 1/298.0
- 設定5: 1/281.4
- 設定6: 1/275.7

### REG
- 設定1: 1/438.9
- 設定2: 1/436.8
- 設定3: 1/417.8
- 設定4: 1/384.2
- 設定5: 1/357.3
- 設定6: 1/347.8

### ボーナス合算
- 設定1: 1/188.2
- 設定2: 1/187.4
- 設定3: 1/180.3
- 設定4: 1/167.6
- 設定5: 1/157.2
- 設定6: 1/153.6

業界発表・HAZUSE・複数解析で一致。

信頼度: INDUSTRY / ANALYSIS_HIGH

## baseGamesPer50
- 設定1 約34.4G/50枚。

信頼度: ANALYSIS_HIGH

## netIncrease
- 疑似ボーナス: 約4.0枚/G。
- AT「BULLET RUSH」: 約0.8枚/G。

定義が異なる2区間を別値として保持。

信頼度: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- SUPER BIG CHANCE / BIG CHANCE: 平均約300枚。
- SUPER BIG CHANCE後はAT突入濃厚。
- BIG CHANCE後はAT期待度約50%。
- REGULAR BONUS: 最大/平均目安約60枚。
- AT「BULLET RUSH」: 1セット50G、完走型セットAT、純増約0.8枚/G。
- プレミアムAT「RUSH1000」: BULLET RUSH 20セット以上＝1000G以上継続濃厚。

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時はリーチ目等を契機に疑似ボーナスへ当選し、ボーナスからATを目指すA300+AT構造。
- 通常時1000G+α消化で天井到達し、前兆を経てBIGまたはREGに当選。天井専用のAT確定等は確認されない。
- 有利区間リセット条件として、有利区間4000G消化、AT非当選時ボーナス終了、AT終了、エンディング終了、設定変更が複数解析で一致。
- 有利区間ランプ非搭載。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_UNVERIFIED_SPECIAL_BENEFIT
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井G数RESET。
- 内部状態RESET。
- 液晶ステージは昼ステージ開始とするHAZUSE/なな徹系解析が一致。
- 設定変更専用の高確・モード優遇などの確定恩恵は高信頼資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置きは設定変更を行わないため、有利区間・天井G数・内部状態をCARRY_OVERとして扱う。
- 直接公開されている純電源OFF→ON時の「有利区間/天井/内部状態引継ぎ」と整合する。
- 個別の演出履歴・ボーナス内部フラグ等、低レイヤ状態の完全契約は対象外かつ `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 純電源OFF→ON: 有利区間CARRY_OVER。
- 天井G数CARRY_OVER。
- 内部状態CARRY_OVER。
- 液晶ステージは昼ステージ開始とするHAZUSE/なな徹系解析あり。内部状態の引継ぎとは別の表示上ステージ初期化として保持。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。

### ceilingAfterReset
- 通常天井: 1000G+α。
- 到達恩恵: BIGまたはREG当選。
- 設定変更専用の短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。

### modeAfterReset
- 本機に朝一専用モードや設定変更専用モード振り分けの確定公開値は確認できず `UNVERIFIED_AFTER_RESEARCH`。
- CZ/規定ゲーム数モードを主軸とする機種ではなく、公開解析上は通常時全役でボーナス抽選する構造。

### stateAfterReset
- 設定変更: RESET。
- 据え置き/純電断: CARRY_OVER。
- 設定変更時の内部状態再セット振り分けは `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き/純電源OFF→ON: CARRY_OVER。
- 有利区間ランプ非搭載のため、朝一ランプによる変更判別は不可。

### resetBenefits
- 高信頼機種別解析では設定変更専用恩恵は「調査中」扱いが残り、確定できる短縮天井・AT直撃・専用優遇状態は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 導入直後141台の実戦観測では顕著な即連恩恵なしとの二次実戦報告があるが、機械仕様値ではないため `LOW_CONFIDENCE_EMPIRICAL` として分離。

### resetPenalties
- 設定変更により前日天井G数・内部状態が消去されるため、宵越し天井狙いの観点では不利。
- 設定変更専用の追加冷遇抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間ランプ非搭載のためランプ判別不可。
- HAZUSE/パチマガスロマガは「設定変更はほぼ見抜けない」と整理。通常時にハズレでもボーナス抽選が行われるため、天井ゲーム数のズレだけでの判別も難しい。
- 設定変更・純電断の双方で昼ステージ開始とする資料があり、開始ステージ単独では判別不可。
- 本機固有ガックン条件/発生率は、機種名・正式型式・検定番号・メーカー名と「設定変更/リセット/朝一/ガックン」を組み替えて再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 通常天井: 1000G+α。
- 設定変更専用短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更専用モード/状態振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 確定リセット恩恵発生率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### publicMorningNumbers
- 導入直後の実戦系二次資料でリセット推定141台を集計。初回ボーナス分布は1〜50G 18台、51〜100G 28台、101〜200G 49台、201〜300G 10台、301〜400G 12台、401〜500G 13台、501〜600G 3台、601G以上8台、観測最大843G。
- 上記は設定変更を実機状態から完全確認した公式/解析サンプルではなく、ホール実戦観測のため `LOW_CONFIDENCE_EMPIRICAL_NOT_MACHINE_SPEC` として分離し、朝一機械仕様値には昇格させない。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- 検索語: `パチスロハードボイルド / ハードボイルド / SハードボイルドXX / S ハードボイルド XX / 2S0375 / タイヨーエレック / Sammy / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 内部状態 / モード / ガックン / 有利区間 / 宵越し`。
- サミー発表を報じる業界記事、Greenbelt検定通過、HAZUSE、パチマガスロマガ、なな徹、パチ7、必勝本、1geki、ちょんぼりすた、導入直後実戦系資料を横断。
- 設定変更/純電断の有利区間・天井・内部状態は複数資料で整合。設定変更専用の明確な数値恩恵は高信頼資料で確定できず、実戦値を別レイヤに分離した。

## conflicts
- 機械割は「市場予想値」と「完全攻略時」で大きく異なるが、これは同一条件の数値競合ではなく技術介入条件差。`DEFINITION_DIFFERENCE` として別系列で保持し、平均化しない。
- 天井表記は1000G+αと999G+αの二次表現がある。解析本文で「通常時1000G消化後に前兆を経由」と複数高信頼資料が一致するためcanonicalを `1000G+α` とし、999G表現はカウント表現差として保持。
- 朝一ステージについて、HAZUSE/なな徹は設定変更・電源OFF→ONとも昼ステージ開始を掲載。一部初期解析は「調査中」のままだが、これは相反値ではないためCONFLICTとはせず、更新済み複数解析をcanonicalとする。

## missingFields
- 本機固有ガックン条件/発生率
- 設定変更専用の内部状態再セット振り分け
- 設定変更専用の確定朝一恩恵率/初当り優遇率
- 低レイヤの演出履歴・内部フラグ等の据え置き/電断完全契約

## sources
取得日: 2026-09-13

1. 遊技日本 / P-WORLD — サミー新機種発表
   - https://news.p-world.co.jp/articles/21303/nippon
   - 型式 `S ハードボイルド XX`、製造タイヨーエレック、6.5号機、A300+AT、設定1ボーナス合算1/188.2、約300枚BB、BB約50%でATを確認。
   - reliability: INDUSTRY
2. 遊技通信 / P-WORLD — 新機種概要
   - https://news.p-world.co.jp/articles/21311/yugitsushin
   - 型式、約300枚BB、約60枚RB、AT構造を確認。
   - reliability: INDUSTRY
3. Greenbelt — 検定通過
   - https://web-greenbelt.jp/post-60109/
   - `S ハードボイルド XX`（タイヨーエレック）の検定通過を確認。
   - reliability: INDUSTRY
4. HAZUSE — 基本スペック/AT
   - https://hazuse.com/machine/pachislot/2S0375/
   - https://hazuse.com/machine/pachislot/2S0375/genre/209/
   - 検定番号2S0375、導入日2022-10-03、設定別BIG/RB/合算、34.4G/50枚、疑似ボーナス約4.0枚/G、AT約0.8枚/G、BB約300枚、REG約60枚を確認。
   - reliability: ANALYSIS_HIGH / INDUSTRY_DB
5. HAZUSE — 天井・設定変更
   - https://hazuse.com/machine/pachislot/2S0375/genre/207/
   - 1000G+α天井、設定変更時は有利区間/天井RESET、電源ON・OFFは引継ぎ、昼ステージ、有利区間ランプ非搭載、リセット条件を確認。
   - reliability: ANALYSIS_HIGH
6. パチマガスロマガ — 朝イチ・有利区間
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/200/kr01.php
   - 設定変更/電源OFF→ONの有利区間・天井契約、昼ステージ、変更判別困難を確認。
   - reliability: ANALYSIS_HIGH
7. なな徹 — 機種概要/朝一
   - https://nana-press.com/kaiseki/machine/431/
   - https://nana-press.com/kaiseki/machine/431/11945/
   - 1000G天井、有利区間リセット契機、設定変更時RESET・電源OFF→ON引継ぎ、両者昼ステージ、有利区間ランプ判別不可を確認。
   - reliability: ANALYSIS_HIGH
8. パチ7 — スペック
   - https://pachiseven.jp/machines_v2/6603
   - 導入日、設定別BIG/RB/合算、市場予想値〜完全攻略値、34.4G/50枚、AT基本性能を確認。
   - reliability: ANALYSIS_HIGH
9. ちょんぼりすた — 朝一リセット
   - https://chonborista.com/slot/sammy-slot/172255/
   - 設定変更時の天井/内部状態RESET、電源OFF→ON時の引継ぎ、有利区間ランプ非搭載を照合。
   - reliability: ANALYSIS_HIGH
10. パチスロ株の365日パチ情報 — 導入直後リセット観測
   - https://a102810281028.hatenablog.com/entry/2022/10/06/085748
   - 推定リセット141台の初回当選分布・最大843Gを確認。機械仕様値ではないため参考観測としてのみ保持。
   - reliability: LOW_CONFIDENCE_EMPIRICAL

## recordStatus
- coreStatus: COMPLETE_CORE
- resetBehaviorQA: COMPLETE_RESET_CORE_WITH_UNVERIFIED_SPECIAL_BENEFIT
- overallConfidence: INDUSTRY_HIGH_CORE / ANALYSIS_HIGH_RESET_CORE / EMPIRICAL_MORNING_LOW
