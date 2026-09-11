# Sヤッターマン絶対正義

No: 1353
machineName: Sヤッターマン絶対正義
machineNameVariants: Sヤッターマン絶対正義 / ヤッターマン絶対正義 / Sヤッターマン絶対正義SE
manufacturer: サンスリー（SANYO系）
releaseDate: 2020-05-11
formalModelName: Sヤッターマン絶対正義SE
certificationNumber: 9S1859
generation: 6号機
systemType: AT / CZ・ポイント管理 / 差枚数管理AT

## payoutRateBySetting
| 設定 | 出玉率 |
|---|---:|
| 1 | 97.4% |
| 2 | 98.5% |
| 3 | 100.2% |
| 4 | 102.8% |
| 5 | 106.0% |
| 6 | 110.0% |

- なな徹、P-WORLD、複数解析資料で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
| 設定 | ヤッターチャンス初当り | ヤッターバトルRUSH |
|---|---:|---:|
| 1 | 1/335.7 | 1/960.6 |
| 2 | 1/322.3 | 1/909.5 |
| 3 | 1/308.3 | 1/874.5 |
| 4 | 1/286.2 | 1/790.1 |
| 5 | 1/239.0 | 1/621.1 |
| 6 | 1/164.2 | 1/436.0 |

- reliability: ANALYSIS_HIGH

## baseGamesPer50
- **CONFLICT**: 約50.0G/50枚 と 約51.5G/50枚の資料差あり。
- スロパチクエストは両表記が存在することを明記。平均化せず両値を保持。
- reliability: CONFLICT

## netIncrease
- ヤッターチャンス / ヤッターバトルRUSH: 約2.8枚/G。
- reliability: ANALYSIS_HIGH

## basicPayout
- ヤッターチャンス: 30G、純増約2.8枚/G。
- ヤッターバトルRUSH: 差枚数管理型。開始時の「絶対正義」は10G+αで平均上乗せ約190枚、上位の真/極は平均約380枚/約720枚とする公開解析あり。
- ヤッターバトルRUSH突入時の平均獲得枚数を約614枚とする解析資料あり。
- 物差し上は固定枚数型ではないため、純増・30G・差枚数管理構造を主値とする。

## modeSpecificMinimumData
- ゲーム数天井: 有利区間移行後799G（前兆込み）でヤッターチャンス当選。
- ヤッターカウンター: 最大767ptでCZ「ボカンゾーン」（成功期待度約25%）。
- ドロンカウンター: 最大64ptで上位CZ「ライブステージ」（成功期待度約50%）。
- BZモードA〜Eが存在し、上位ほど規定ヤッターポイントが優遇。Dは511pt以内、Eは128pt以内。

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_PUBLIC_RESET_CORE_WITH_DETECTION_CONFLICT
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は有利区間、ゲーム数天井、カウンターpt、カウンター高確をRESET。
- 朝一ステージはドロンタウンステージ。
- 設定変更後は非有利区間から有利区間へ移行し、モードを新規抽選する。
- 有利区間移行時は必ず高確からスタートするとの解析あり。

### carryOverBehavior
- 据え置き時は、設定変更を伴わない純電源OFF→ONと同様にゲーム数天井・有利区間・カウンターpt・カウンター高確を引き継ぐ扱い。
- 液晶カウンターは見た目上0表示から始まっても、遊技開始レバーONで電断前の値へ復帰する。

### powerCycleBehavior
- 純電源OFF→ON: 有利区間、ゲーム数天井、カウンターpt、カウンター高確をCARRY_OVER。
- カウンターpt / 高確は朝一の初期表示だけ0に見えるが、1G目レバーONで復帰する。

### gameCounterReset
- 設定変更: RESET。
- 据え置き / 純電断: CARRY_OVER。
- ゲーム数天井は有利区間移行後799G。

### ceilingAfterReset
- 設定変更専用の短縮ゲーム数天井は確認されていない。通常と同じ799G（前兆込み）。
- ポイント系は設定変更でリセットされ、BZモード新規抽選後の規定ptに従う。

### modeAfterReset
- 有利区間移行時にBZモードA〜Eを抽選。
- 公開資料では基本的にAが選ばれやすく、設定差も示されるが、正確な全設定別数値は公開固定値として確認できず、記号評価を数値化しない。
- ボカンゾーン失敗後はモードアップ抽選のみで、有利区間が切れるまで下位モードへ転落しない。

### stateAfterReset
- 設定変更でカウンター高確をRESET。
- 有利区間移行時は必ず高確スタートとする解析あり。
- 純電断時はカウンター高確を引き継ぐ。

### advantageousSectionReset
- 設定変更: RESET。
- 純電断 / 据え置き: CARRY_OVER。
- 通常のゲーム進行ではヤッターチャンス失敗、AT終了、エンディング終了でも有利区間リセット。

### resetBenefits
- 有利区間移行時は必ず高確スタート。
- 非有利区間中の強チェリー / チャンス目成立時、全設定共通12.5%でヤッターチャンス直撃抽選。
- 設定変更専用短縮天井は確認されていない。

### resetPenalties
- 設定変更で前日のゲーム数天井進行、カウンターpt、カウンター高確を失うため、前日蓄積値が大きい場合は客側には実質的不利になり得る。
- ただしメーカー公表の「設定変更ペナルティ」という独立仕様ではないため、経営シミュレーション上の状態消失として扱う。

### resetDetection
- 最も実用的な判別材料はカウンター表示。純電断/据え置きでは見た目0からでも1G目レバーON時に前日のptへ復帰し、設定変更ではリセットされる。
- **有利区間ランプ判別は資料CONFLICTあり。** なな徹/ちょんぼりすたは「ランプはAT開始時に点灯・終了時に消灯」「通常時は消灯タイプなので朝一判別不可」と整理。一方、イチカツは「朝一消灯なら設定変更濃厚」と記載。
- 詳細な点灯タイミングを明示する前者をcanonicalとし、**ランプ単独では変更判別不可**として保存。後者はCONFLICTとして保持する。
- 本機固有のリールガックン発生条件・発生率は再探索後も高信頼直接資料を確認できずUNVERIFIED。

### numericResetData / publicMorningNumbers
- 設定変更時ゲーム数天井: 799G（前兆込み、短縮なし）。
- 非有利区間中 強チェリー / チャンス目 → ヤッターチャンス直撃率: 12.5%（全設定共通）。
- 有利区間移行時: 高確スタート確定。
- BZモードE規定pt: 128pt / D: 511pt / A〜C最大: 767pt。ただし設定変更時の各モード選択率の正確な数値はPUBLIC_VALUE_NOT_FOUND。

## resetBehavior 再探索メモ
2026-09-11に `Sヤッターマン絶対正義 / ヤッターマン絶対正義 / Sヤッターマン絶対正義SE / 9S1859 / サンスリー / SANYO / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 799G / カウンター / モード / ガックン / 有利区間 / 有利区間ランプ` を組み替え、なな徹、パチ7、P-WORLD、K-Navi、ちょんぼりすた、スロパチクエスト、イチカツ、遊技通信の検定資料、2020年導入カレンダーを横断。RESET/CARRY_OVER、カウンター復帰、高確、有利区間、非有利区間12.5%は複数系統で固定。有利区間ランプ判別は資料競合を平均・統合せずCONFLICTとして保持した。

## conflicts
- baseGamesPer50: 約50.0G/50枚 vs 約51.5G/50枚。CONFLICT。
- releaseDate: パチ7に2020-05-07表記がある一方、K-Navi、当時導入カレンダー、複数解析は2020-05-11。canonicalは複数一致の2020-05-11、5/7を地域/予定差候補として保持。
- resetDetection: 有利区間ランプで判別可能とする単一整理資料 vs 通常時ランプ消灯タイプのため判別不可とする複数詳細解析。canonicalは判別不可。

## missingFields
- 設定変更時のBZモードA〜Eの正確な全設定別数値振り分け。
- 本機固有ガックン契約。

## coreStatus
- **COMPLETE_CORE**

## overallReliability
- **ANALYSIS_HIGH_WITH_INDUSTRY_TYPE_CONFIRMATION_AND_CONFLICTS**

## sources
取得日: 2026-09-11

1. 遊技通信「東京都公安委員会検定通過状況（3月30日）」
   - https://www.yugitsushin.jp/news/maker/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%883%E6%9C%8830%E6%97%A5%EF%BC%89-2/
   - 正式型式Sヤッターマン絶対正義SE、検定番号9S1859、サンスリーを確認。
   - reliability: INDUSTRY
2. K-Navi「Sヤッターマン絶対正義」
   - https://p-kn.com/kishu/3429/
   - 2020-05-11ホール導入開始、メーカー、基本仕様を確認。
   - reliability: ANALYSIS_SINGLE
3. なな徹「ボーナス確率/機械割」
   - https://nana-press.com/kaiseki/machine/41/739/
   - 設定別YC/RUSH確率・機械割を確認。
   - reliability: ANALYSIS_HIGH
4. なな徹「朝イチ/設定変更」
   - https://nana-press.com/kaiseki/machine/41/743/
   - 有利区間/天井/カウンターpt/高確の設定変更RESET・電源ON/OFF引継ぎ、1G目表示復帰、ステージを確認。
   - reliability: ANALYSIS_HIGH
5. パチ7「ヤッターマン絶対正義」
   - https://pachiseven.jp/machines/6034
   - 天井、BZモード、非有利区間12.5%、有利区間移行時高確、AT基本性能を確認。導入日は5/7表記のためCONFLICTへ保持。
   - reliability: ANALYSIS_HIGH
6. ちょんぼりすた「ヤッターマン 絶対正義」
   - https://chonborista.com/slot/sanyo-slot/106874/
   - 設定別性能、51.5G/50枚、純増2.8枚/G、天井、朝一内部状態RESET/引継ぎ、通常時ランプ消灯を確認。
   - reliability: ANALYSIS_HIGH
7. スロパチクエスト「設定差まとめ」
   - https://www.slopachi-quest.com/article/yatterman-justice-settei/
   - 設定別性能と50.0G/50枚・51.5G/50枚の資料差を確認。
   - reliability: ANALYSIS_HIGH
8. スロパチクエスト「天井解析」
   - https://www.slopachi-quest.com/article/yatta-mann-zettaiseigi-tennjyou/
   - 799G天井、ポイント天井、CZ期待度を照合。
   - reliability: ANALYSIS_HIGH
9. P-WORLD「Sヤッターマン絶対正義」
   - https://www.p-world.co.jp/machine/database/9174
   - 6号機AT、純増、30G YC、799G天井、初当りを別系統で照合。
   - reliability: ANALYSIS_HIGH
10. イチカツ「ヤッターマン絶対正義 朝一リセット」
   - https://ichikatsu.com/yattermanseigi/
   - 天井RESET/電断引継ぎ、1G目カウンター復帰を確認。有利区間ランプ判別記載は詳細解析と競合するためCONFLICT扱い。
   - reliability: ANALYSIS_SINGLE
11. パチンコ・パチスロ.com「新台導入日カレンダー2020」
   - https://pachinkopachisro.com/archives/53951811.html
   - 2020-05-11導入群を確認。
   - reliability: INDUSTRY_CALENDAR_SECONDARY
