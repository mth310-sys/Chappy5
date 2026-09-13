# パチスロ盾の勇者の成り上がり

recordNo: 1550
machineName: パチスロ盾の勇者の成り上がり
manufacturer: 銀座 / サミー
formalModel: S パチスロ盾の勇者の成り上がり KS
inspectionCode: 2S0711
releaseDate: 2023-02-20
generation: 6.5号機 / メダル機
systemType: AT / CZ経由・ST型AT
settings: 1 / 2 / 3 / 4 / 5 / 6

## payoutRateBySetting
- 設定1: 97.5%
- 設定2: 98.5%
- 設定3: 100.5%
- 設定4: 104.9%
- 設定5: 108.1%
- 設定6: 111.5%

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### AT初当たり合算
- 設定1: 1/298.9
- 設定2: 1/284.0
- 設定3: 1/274.3
- 設定4: 1/246.7
- 設定5: 1/228.5
- 設定6: 1/190.5

### 公開されている設定1内訳
- 聖邪決戦初当たり: 1/1217.9
- WAVE WAR初当たり: 1/396.2

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約36.0G/50枚（全設定共通表記）。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- AT「WAVE WAR」: 約2.6枚/G。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- ATはST「PHASE」と出玉区間「CHAIN STRIKE」を往復するST型AT。
- 通常AT初当たり・通常天井到達時はST基礎ゲーム数10Gで開始する契約を確認。
- 有利区間引き継ぎ状態の800G天井のみST基礎ゲーム数5G開始。
- BIGボーナス: 20G、純増約2.6枚/G。
- エピソードボーナス: 30G、純増約2.6枚/G。
- CZ「ブレイブバトル」: 10G+α（高確中20G+α）、平均突破期待度約40%。
- 上位CZ「聖邪決戦」: 前半5G+α＋バトル5G、平均継続率約60%。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時はレア役成立時に前兆を介さず状態移行/CZ等へ繋がる「ダイレクトリンクシステム」。
- 通常天井は最大1173G+αでAT。
- 設定変更後は800G+αへ短縮。
- 有利区間引き継ぎ状態でも800G+α天井となるが、到達時ATのST基礎ゲーム数は5G。設定変更後の短縮天井到達時は10G。
- 教皇ポイントは10pt到達で次回CZ成功＋上位CZ「聖邪決戦」突入濃厚。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_SHORTENED_CEILING_RANDOM_GAME_ADD_AND_PUBLIC_POPE_POINT_DISTRIBUTION
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井RESETし、通常1173G+αから800G+αへ短縮。
- 内部状態RESET/再抽選。
- 通常時ゲーム数は内部的にランダム加算される。液晶表示は0G開始。
- 設定変更時に教皇ポイント獲得抽選を実施。
- 設定変更時は「謎高確」へ移行しやすいことを複数解析で確認。ただし具体的移行率は公開値を固定できず。
- リールガックンは発生しない。

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- 天井・内部状態・通常時ゲーム数をCARRY_OVER。
- 朝一液晶上のゲーム数は設定変更の有無にかかわらず0G表示となる。
- モードという独立した通常時モードテーブルは主要資料で確認できず、本DBでは天井/状態/ゲーム数の引継ぎ契約を保持する。

### powerCycleBehavior
- 純電源OFF→ON時は有利区間・天井・内部状態・通常時ゲーム数をCARRY_OVER。
- 液晶上のゲーム数は0G開始。
- リールガックンは発生しない。

### gameCounterReset
- 設定変更: 内部ゲーム数をRESET後、ランダム加算。液晶0G表示。
- 据え置き: 内部ゲーム数CARRY_OVER。液晶0G表示。
- 純電源OFF→ON: 内部ゲーム数CARRY_OVER。液晶0G表示。
- ランダム加算の具体的振り分けは検索語・資料系統を変えて再探索したが `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### ceilingAfterReset
- 通常: 1173G+α。
- 設定変更後: 800G+αへ短縮。
- 設定変更後の短縮天井到達時はST基礎ゲーム数10GのAT。
- 有利区間引き継ぎ時も800G+αだが、こちらはST基礎ゲーム数5Gで定義が異なるため混同しない。

### modeAfterReset
- 設定変更時に独立した通常A/B等のモード振り分けを行う公開構造は主要資料では確認できず `NOT_APPLICABLE_OR_NOT_PUBLICLY_DEFINED`。
- 朝一専用モードの存在は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 内部ゲーム数ランダム加算および内部状態再抽選を主要な朝一変化として扱う。

### stateAfterReset
- 設定変更: RESET/再抽選。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 設定変更時は見た目で判別できない「謎高確」への移行期待度が優遇されるが具体率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 通常遊技中の有利区間リセット契機として、AT完走時および引き戻しゾーン「FINAL SHOWDOWN」の残り5G到達時を確認。
- 有利区間ランプは存在せず、ランプによる朝一変更判別不可。

### resetBenefits
- 天井が1173G+αから800G+αへ短縮。
- 内部ゲーム数がランダム加算されるため、実際の残り天井は表示800Gより短くなる場合がある。
- 設定変更時は「謎高確」移行期待度が優遇。
- 設定変更時に教皇ポイント獲得抽選。合計50.0%で1pt以上を獲得する。
- 短縮天井到達時はST基礎ゲーム数10GでAT開始。

### resetPenalties
- 設定変更により前日の天井進行・内部状態を失う。
- 設定変更専用の追加不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間ランプ非搭載のためランプ判別不可。
- 設定変更時でもリールガックンは発生しないためガックン判別不可。
- 設定変更/据え置きとも朝一液晶ゲーム数は0G開始のため表示単独では判別不可。
- 800Gを大きく超えてAT非当選なら据え置き濃厚。宵越し天井発動も据え置き材料。
- 設定変更時は内部ゲーム数ランダム加算があるため、800Gより手前の天井到達だけでは据え置き/変更を単純判別できない。

### numericResetData
- 設定変更後天井: 800G+α。
- 通常天井: 1173G+α。
- 設定変更時 教皇ポイント獲得抽選:
  - 非当選: 50.0%
  - +1pt: 20.8%
  - +2pt: 16.7%
  - +3pt: 8.3%
  - +5pt: 4.2%
- 設定変更時1pt以上獲得合算: 50.0%。
- 内部ゲーム数ランダム加算振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 謎高確移行率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`（移行優遇自体は確認）。

### publicMorningNumbers
- 設定変更後天井: 800G+α。
- 教皇ポイント設定変更時振り分け: 0pt 50.0 / +1pt 20.8 / +2pt 16.7 / +3pt 8.3 / +5pt 4.2%。
- 一部攻略資料の朝一実戦値として「10G以内AT約4.2%」「天井到達約3.6%」を確認したが、一次解析値ではなくサンプル条件依存のため `LOW_CONFIDENCE_EMPIRICAL` としてcanonical性能値には不採用。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `パチスロ盾の勇者の成り上がり / 盾の勇者 / S パチスロ盾の勇者の成り上がり KS / 2S0711 / 銀座 / サミー` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 天井短縮 / ランダム加算 / 謎高確 / 教皇ポイント / ガックン / 有利区間 / 有利区間ランプ` を組み替えて検索。
- パチマガスロマガ、なな徹、HAZUSE、パチ＆スロ必勝本、一撃、パチ7、SLOT HACK、後年整理DBを横断。

## conflicts
- 設定変更後天井800G+α、通常1173G+α、AT初当たり、機械割、ベース36.0G、純増2.6枚/Gは主要解析間で一致し、主要CONFLICTなし。
- メーカー表記は製造/ブランド文脈で「銀座」「Sammy/サミー」が併記されるため、本DBでは `銀座 / サミー` と保持。
- 有利区間引き継ぎ時も800G+α天井だが、到達時ST基礎ゲーム数5G。設定変更後短縮天井はST10Gであり、同じ800G天井でも恩恵定義が異なるため分離保存。

## sources
取得日: 2026-09-13

- HAZUSE: https://hazuse.com/machine/pachislot/2S0711/
  - 型式 `S パチスロ盾の勇者の成り上がり KS`、検定番号2S0711、導入日、AT確率、機械割、36.0G/50枚、純増、天井、設定変更/電断、有利区間ランプ、ガックン。
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/vpage/2503/2
  - 2023-02-20、AT初当たり、機械割、36.0G/50枚、純増2.6枚/G、1173G/800G天井、設定変更/電断挙動。
- 一撃: https://1geki.jp/slot/s_tat_yu/
  - 2023-02-20、銀座、設定別AT初当たり/出玉率、ゲーム性。
- パチマガスロマガ 朝イチ・有利区間: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/202/kr01.php
  - 設定変更/電断の有利区間・天井・状態・ゲーム数、ランダム加算、800G短縮、ガックンなし、有利区間リセット契機。
- なな徹 朝一: https://nana-press.com/kaiseki/machine/500/13695/
  - 設定変更/据え置き挙動、謎高確優遇、教皇ポイント設定変更時振り分け、有利区間、ガックン。
- パチマガスロマガ CZ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/202/cz01-2.php
  - CZ 10G+α、高確20G+α、平均期待度約40%。
- パチマガスロマガ BIG: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/202/tk01-1.php
  - BIG 20G、純増約2.6枚/G。
- SLOT HACK: https://slothack.net/matome/92005/
  - 朝一リセット挙動、実戦値（参考・LOW_CONFIDENCE_EMPIRICAL）。
- パチ7: https://pachiseven.jp/machines/6680/cutout/1007
  - 2023-02-20、銀座/サミー、6.5号機、1173G+α天井。

## missingFields
- 設定変更時の内部ゲーム数ランダム加算振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 設定変更時「謎高確」の具体的移行率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 設定変更専用の独立モード振り分け: `NOT_APPLICABLE_OR_NOT_PUBLICLY_DEFINED`。

## status
- coreStatus: COMPLETE_CORE
- resetBehaviorQA: COMPLETE_RESET_CORE_WITH_SHORTENED_CEILING_RANDOM_GAME_ADD_AND_PUBLIC_POPE_POINT_DISTRIBUTION
