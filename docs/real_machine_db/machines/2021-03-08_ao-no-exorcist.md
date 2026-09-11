# パチスロ青の祓魔師

No: 1396
machineName: パチスロ青の祓魔師
machineNameVariants: パチスロ青の祓魔師 / 青の祓魔師 / 青のエクソシスト / 青エク / Sパチスロ青の祓魔師L1
manufacturer: オリンピア
releaseDate: 2021-03-08
formalModelName: Sパチスロ青の祓魔師L1
certificationNumber: 9S1717

generation: 6.1号機
systemType: AT / 規定ゲーム数CZ・AT直撃 / 高純増自力継続型AT

## identity / release
- HAZUSEで型式 `Sパチスロ青の祓魔師L1`、検定番号 `9S1717`、メーカー オリンピア、導入開始日2021-03-08を確認。
- 遊技通信の2021-01-14業界記事はオリンピア製・純増9枚/G・3月7日ホール導入予定と報道。実導入日はHAZUSE、1geki、なな徹、P-WORLD等の2021-03-08で統一して保存する。
- reliability: INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.6% |
| 2 | 99.0% |
| 3 | 100.1% |
| 4 | 101.8% |
| 5 | 104.1% |
| 6 | 107.0% |
- HAZUSE、1gekiで一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
| 設定 | CZ「エクソシストバトル」 | AT「超祓魔RUSH」初当たり |
|---:|---:|---:|
| 1 | 1/518.7 | 1/1090.6 |
| 2 | 1/489.1 | 1/919.3 |
| 3 | 1/464.4 | 1/806.4 |
| 4 | 1/451.1 | 1/696.6 |
| 5 | 1/447.8 | 1/590.9 |
| 6 | 1/366.2 | 1/342.4 |
- HAZUSE、1geki、なな徹で一致。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 設定1代表: 約51.5G/50枚。
- HAZUSEでは設定1〜6で約51.5〜52.2G/50枚。なな徹・期待値見える化も設定1代表約51.5Gを採用。
- reliability: ANALYSIS_HIGH

## netIncrease
- AT「超祓魔RUSH」: 約9.0枚/G。
- BIG BONUSも約9.0枚/G。
- 遊技通信、HAZUSE、1geki、なな徹、P-WORLDで一致。
- reliability: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- AT「超祓魔RUSH」はベルナビ回数管理型。必ず無敵ZONEから開始し、初期ベルナビ保証は10回 / 15回 / 20回。保証消化後は自力ZONEへ移行し、復帰を繰り返す自力継続型。
- 設定1の平均AT獲得枚数は約873.6枚、平均AT継続約107.9G。設定6では約376.0枚 / 約50.4G。固定1セット枚数ではないため比較用補助値として保持。
- BIG BONUSはベルナビ30回継続の疑似ボーナス。
- reliability: ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は通常A / 通常B / 天国の3モードで規定ゲーム数を管理。有利区間引継ぎ時はCZ失敗後 / AT終了後の専用モードを使用。
- 通常A・B天井: 666G+αでCZ以上。
- 天国: 350G+α。CZ失敗後・AT終了後の有利区間引継ぎ時も最大350G+α。
- CZは規定ゲーム数到達が主契機で、AT直撃も存在する。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_PUBLIC_MODE_TABLE_AND_MEMORIAL_START
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior
- 設定変更時は天井ゲーム数RESET。
- 内部モードは再抽選。
- 有利区間RESET / ランプ消灯。
- パチ7解析ではポイント獲得特化ゾーン「メモリアルステージ」（15G）の突入契機に設定変更時を明記しており、朝一恩恵として保存する。
- 設定変更時の液晶開始ステージは複数攻略資料で「調査中」のままのため `UNVERIFIED_AFTER_RESEARCH`。

### carryOverBehavior
- 据え置き時は天井ゲーム数・内部モード・有利区間をCARRY_OVER側として扱う。
- 有利区間引継ぎ状態で閉店した場合は朝一もランプ点灯を引き継ぎ得る。
- 祓魔力・マイスターポイント等の個別内部カウンターについて、据え置き時の独立した完全な引継ぎ契約は固定資料を確認できず `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 純電源OFF→ONでは天井ゲーム数を引き継ぐ。
- 内部モードを引き継ぐ。
- 有利区間ランプ状態 / 有利区間を引き継ぐ。
- 液晶開始ステージは公開資料で調査中のため `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。

### ceilingAfterReset
- 有利区間開始時に通常A / 通常B / 天国へ再抽選。
- 通常A・Bなら最大666G+α、天国なら最大350G+α。
- 設定変更専用の固定短縮天井ではなく、初期モード抽選によって最大天井が変わる構造。

### modeAfterReset
- 設定変更時は内部モード再抽選。
- 有利区間移行時の実質モード選択率が公開されており、設定変更後も新規有利区間開始としてこの初期モード表を適用する。
- 実質選択率（通常A / 通常B / 天国）:
  - 設定1: 78.91% / 15.82% / 5.27%
  - 設定2: 59.77% / 26.24% / 13.99%
  - 設定3: 50.00% / 30.86% / 19.14%
  - 設定4: 35.94% / 35.28% / 28.78%
  - 設定5: 28.91% / 35.55% / 35.55%
  - 設定6: 1.17% / 1.16% / 97.67%
- この表は「設定変更専用表」とは明記されず、有利区間移行時の共通初期モード表であるため定義を分離して保存する。

### stateAfterReset
- 設定変更時にメモリアルステージへの突入契機があることを確認。
- メモリアルステージは15G継続し、毎ゲームマイスターポイント獲得抽選を行う。
- 設定変更時のメモリアルステージ突入率 / ループ率の固定公開値は確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 通常時の祓魔力は初回50スタートだが、設定変更専用初期値として独立公表された数値ではないため朝一専用数値としては扱わない。

### advantageousSectionReset
- 設定変更: RESET / ランプ消灯。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 本機は通常時基本消灯型だが、CZ/AT終了後に有利区間を引き継いだ通常時はランプ点灯状態となる。

### resetBenefits
- 設定変更時は有利区間を新規開始し、設定に応じて通常A / 通常B / 天国を再抽選。
- 設定6は有利区間移行時に天国97.67%で、350G+α以内の初当たりがほぼ確約される構造。低設定でも天国選択時は最大350G+α。
- 設定変更時はポイント獲得特化ゾーン「メモリアルステージ」突入契機あり。15G間マイスターポイントを獲得しやすい。
- 固定AT直撃保証や設定変更専用CZ保証は確認できない。

### resetPenalties
- 公開された設定変更専用の定量的不利要素は確認できない。
- CZ/AT後の有利区間引継ぎ状態は最大350G+αに短縮される一方、期待値見える化では低設定時のAT性能が冷遇される実戦分析がある。ただしこれは設定変更後ではなく「引継ぎ状態」の分析であり、resetPenaltyには転記しない。

### resetDetection
- 通常時は基本的に有利区間ランプ消灯型のため、朝一消灯だけでは設定変更判別に使えない。
- 朝一から有利区間ランプが点灯していれば、据え置きかつ前日から有利区間引継ぎ状態の可能性が高い。
- 液晶開始ステージは設定変更 / 電断とも公開資料で調査中。
- 本機固有のガックン発生条件・発生率は、機種名・型式・設定変更・リセット・朝一・ガックン等で再探索したが固定資料を確認できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更時ゲーム数: RESET。
- 有利区間移行時モード実質選択率（通常A / 通常B / 天国）:
  - 設定1: 78.91 / 15.82 / 5.27%
  - 設定2: 59.77 / 26.24 / 13.99%
  - 設定3: 50.00 / 30.86 / 19.14%
  - 設定4: 35.94 / 35.28 / 28.78%
  - 設定5: 28.91 / 35.55 / 35.55%
  - 設定6: 1.17 / 1.16 / 97.67%
- 最大天井: 通常A/B=666G+α、天国=350G+α。
- 設定変更時メモリアルステージ: 突入契機あり / 15G継続 / 突入率 `UNVERIFIED_AFTER_RESEARCH`。
- 朝一特定G以内当選率の「設定変更専用」固定値: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## sources
取得日: 2026-09-12

1. HAZUSE「パチスロ 青の祓魔師」
   - https://hazuse.com/machine/pachislot/9S1717/
   - 型式、検定番号、導入日、メーカー、設定別CZ/AT、機械割、50枚ベース、純増、天井、有利区間ランプを確認。
   - reliability: ANALYSIS_HIGH

2. 遊技通信web「平和が新機種『パチスロ青の祓魔師』を発表」
   - https://www.yugitsushin.jp/news/maker/20210114-0941/
   - オリンピア製、純増9枚/G、自力継続型AT、導入予定時期を確認。
   - reliability: INDUSTRY

3. 1geki「パチスロ青の祓魔師 解析・スペック」
   - https://1geki.jp/slot/s_aoex/
   - 設定別CZ/AT初当たり、出玉率、AT仕様、導入日を照合。
   - reliability: ANALYSIS_HIGH

4. 1geki「通常時のモードと有利区間」
   - https://1geki.jp/slot/s_aoex/40/
   - モード別天井、有利区間移行時のモード抽選、有利区間引継ぎ率を確認。
   - reliability: ANALYSIS_HIGH

5. 1geki「AT 超祓魔ラッシュ」
   - https://1geki.jp/slot/s_aoex/81/
   - 純増9.0枚/G、AT構造、設定別平均獲得枚数・平均継続Gを確認。
   - reliability: ANALYSIS_HIGH

6. なな徹「パチスロ 青の祓魔師 解析情報まとめ」
   - https://nana-press.com/kaiseki/machine/111/
   - 50枚約51.5G、純増約9.0枚/G、導入日を照合。
   - reliability: ANALYSIS_HIGH

7. なな徹「通常時のモード」
   - https://nana-press.com/kaiseki/machine/111/3290/
   - 有利区間移行時の実質モード選択率、モード別天井、有利区間引継ぎ率を確認。
   - reliability: ANALYSIS_HIGH

8. パチ7「パチスロ青の祓魔師」
   - https://pachiseven.jp/machines_v2/6234
   - 設定変更/電断時の天井・内部モード・ランプ挙動、メモリアルステージ突入契機、祓魔力初回50を確認。
   - reliability: ANALYSIS_HIGH

9. 期待値見える化「青の祓魔師」
   - https://slotjin.com/tenjoukitaichi/exorcist/
   - 設定変更時RESET、電源OFF→ON時の天井/モード引継ぎ、通常時基本消灯型の変更判別を照合。
   - reliability: ANALYSIS_HIGH

10. P-WORLD「パチスロ青の祓魔師」
   - https://www.p-world.co.jp/machine/database/9318
   - ATベルナビ保証10回以上、無敵ZONE初期10/15/20回、BIGベルナビ30回、純増9枚/Gを確認。
   - reliability: INDUSTRY_DB

## missingFields
- 設定変更時 / 電断時の液晶開始ステージ: `UNVERIFIED_AFTER_RESEARCH`（複数資料で調査中）。
- 設定変更時メモリアルステージの突入率 / ループ率: `UNVERIFIED_AFTER_RESEARCH`。
- 祓魔力・マイスターポイント等の据え置き/電断時個別引継ぎ契約: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックン条件・発生率: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の特定ゲーム数以内当選率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## conflicts
- パチ7の機種概要欄に「天井G数 600G消化でCZ」とする簡略表示が残る一方、HAZUSE・1geki・なな徹・必勝本はモード別最大666G+α（通常A/B）、350G+α（天国/引継ぎ）で一致。詳細解析の複数一致をcanonicalとし、600G表記は `CONFLICT_SUMMARY_DISPLAY` として扱う。
- 遊技通信の発表時点ではホール導入「3月7日予定」、実導入DB/解析各社は2021-03-08。予定日と実導入日の定義差として、releaseDateは2021-03-08をcanonicalとする。
