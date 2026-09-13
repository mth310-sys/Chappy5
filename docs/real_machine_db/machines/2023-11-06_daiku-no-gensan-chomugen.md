# L大工の源さん 超夢源

recordNo: 1598
machineName: L大工の源さん 超夢源
manufacturer: サンスリー
formalModel: L大工の源さん超夢源PH
inspectionCode: 3S0747
releaseDate: 2023-11-06
generation: 6.5号機 / スマスロ
systemType: AT / 擬似ボーナス + CZ + 高継続ST型AT
settings: L / 1 / 2 / 4 / 5 / 6

## payoutRateBySetting
- 設定L: 78.0%
- 設定1: 97.8%
- 設定2: 99.6%
- 設定4: 103.5%
- 設定5: 107.0%
- 設定6: 111.0%
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### ボーナス初当り
- 設定1: 1/337.4
- 設定2: 1/321.2
- 設定4: 1/278.7
- 設定5: 1/245.0
- 設定6: 1/210.2
- 設定L: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### CZ「源チャレンジ」
- 設定1: 1/1241.5
- 設定2: 1/1088.7
- 設定4: 1/1017.9
- 設定5: 1/910.2
- 設定6: 1/840.9
- 設定L: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約33.5G/50枚（全設定共通掲載値）
- 一部二次資料は約33G/50枚表記。33.5Gを丸めた表記とみられるが、元データでは33.5Gをcanonicalとして保持する。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- 通常時擬似ボーナス BIG / REG: 約2.7枚/G
- AT「超源RUSH」中ボーナス: 約2.7枚/G
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- BIG BONUS: 50G+α、平均約150枚、純増約2.7枚/G。
- REGULAR BONUS: 20G+α、平均約60枚、純増約2.7枚/G。
- CZ「源チャレンジ」: 5G、ボーナス当選期待度約50%。
- AT「超源RUSH」: 3G ST。各ゲームのボーナス期待度約50%、RUSH全体の平均継続率約96%、獲得期待枚数約1500枚。
- 上位「超源RUSH EXTRA」: 3G ST、平均継続率約97.3%。EX単体の獲得期待枚数約2000枚、EXを含むRUSHトータル期待枚数約3300枚と業界資料で公表。
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時モードは通常A / 通常B / 通常C / 天国A / 天国B / 天国Cの6種類。
- 通常A〜Cの最大天井は900G+α、天国A〜Cは32G+α。
- 通常・天国ともA<B<Cの順でモード移行等が優遇される。
- 設定変更後、FINAL JUDGE終了後、通常時ボーナス単発後は最大天井が600G+αへ短縮。
- CZはスイカ規定回数成立で突入し、最大12回が規定回数天井。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更で有利区間、天井までの内部ゲーム数、内部状態、内部モードをRESET / 再抽選。
- 朝一ステージは桐島邸ステージ。
- 通常最大900G+αの天井が600G+αへ短縮。
- 設定変更後はボーナス初当り時のRUSH突入レベル優遇抽選が行われる。
- ボーナス非当選のまま通常時200G到達時は高確以上へ必ず移行する。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き（設定変更なし）は、機種固有の電源OFF→ON比較表から有利区間、天井までの内部消化G、内部状態、内部モードをCARRY_OVERする挙動を確認。
- ホール営業上の据え置きでは通常電断を伴うため、液晶G数表示は0Gへ戻り、通常ステージ滞在時は桐島邸ステージから開始する一方、内部天井進行は維持される。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### powerCycleBehavior
- 設定変更を伴わない電源OFF→ONでは、有利区間、天井までの内部消化G、内部状態、内部モードをCARRY_OVER。
- 液晶内G数表示は0GへRESETされ、通常ステージ滞在時は桐島邸ステージへRESETされる。
- 内部天井進行は維持されるため、前日+当日で通常時合計900G到達時に宵越し天井となる。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### gameCounterReset
- 設定変更: 内部天井ゲーム数RESET。設定変更後専用の最大600G+α天井へ。
- 据え置き / 純電源OFF→ON: 内部天井ゲーム数CARRY_OVER。
- 純電源OFF→ONでは液晶表示ゲーム数のみ0Gへ戻るため、表示値と内部天井進行は一致しない場合がある。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 通常最大天井: 900G+α。
- 設定変更後: 600G+αへ短縮。
- FINAL JUDGE終了後、通常時ボーナス単発後も600G+α天井が適用される。
- 電源OFF→ONのみでは短縮されず、内部ゲーム数を引き継いだ通常900G+α天井契約を継続する。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更: 内部モードRESET / 再抽選。
- 据え置き / 純電源OFF→ON: 内部モードCARRY_OVER。
- 設定変更時の通常A/B/C・天国A/B/Cそれぞれの開始振り分け率は、機種名・正式型式・メーカー名と「設定変更 / リセット / 朝一 / モード / 振り分け」等を組み替えて再探索したが、比較可能な公開固定値を確認できず PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH（RESET/CARRY_OVER） / UNVERIFIED（開始モード振り分け）

### stateAfterReset
- 設定変更: 内部状態RESET / 再抽選。
- 据え置き / 純電源OFF→ON: 内部状態CARRY_OVER。
- 設定変更時、源ZONE終了時、FINAL JUDGE終了時の初期状態抽選は、その他成立時で通常85.16% / 高確14.06% / 超高確0.78%、共通ベル成立時で高確90.62% / 超高確9.38%、弱チェリー成立時で高確50.00% / 超高確50.00%。
- 朝一の物差しとして重要な規定G数到達時は、設定変更を含む有利区間移行時の200Gで必ず高確以上へ移行する。
信頼度: ANALYSIS_HIGH

### advantageousSectionReset
- 設定変更: 有利区間RESET。
- 据え置き / 純電源OFF→ON: 有利区間CARRY_OVER。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetBenefits
- 最大天井が900G+αから600G+αへ短縮。
- 通常時200G消化までボーナス非当選なら高確以上へ必ず移行。
- ボーナス初当り時のRUSH突入レベルに優遇抽選あり。
- 設定変更時にはCZ用スイカ規定回数も再決定される。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更では前日の天井進行、内部モード、内部状態、有利区間を失うため、前日深ハマリ台では据え置き時に存在する宵越し900G天井価値が消失する。
- 設定変更固有の追加的な数値的不利要素は PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH / UNVERIFIED（追加ペナルティ）

### resetDetection
- 設定変更時も純電源OFF→ON時も通常ステージなら桐島邸ステージ開始、液晶G数表示も0Gへ戻るため、朝一のステージ・液晶0Gだけでは設定変更と据え置きを判別できない。
- 据え置きでは内部天井G数が引き継がれるため、液晶表示900Gより浅い位置で前日+当日合計900Gに達して天井発動した場合は据え置き推測材料になる。
- 設定変更後は600G+α天井、200G高確以上移行、RUSH突入レベル優遇が統計的な推測材料になるが、単独台の確定判別ではない。
- 本機固有リールガックンについて、「L大工の源さん超夢源 / L大工の源さん超夢源PH / サンスリー / SANYO / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン」等で再探索したが、高信頼な機種固有発生条件・発生率を固定できず UNVERIFIED_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH / UNVERIFIED（ガックン）

### numericResetData
- 通常最大天井: 900G+α。
- 設定変更後最大天井: 600G+α。
- 設定変更を含む有利区間移行時、200G到達時の内部状態移行:
  - 通常A: 高確75.00% / 超高確25.00%
  - 通常B: 高確75.00% / 超高確25.00%
  - 通常C: 高確50.00% / 超高確50.00%
- 設定変更時等の初期状態抽選:
  - その他成立: 通常85.16% / 高確14.06% / 超高確0.78%
  - 共通ベル: 高確90.62% / 超高確9.38%
  - 弱チェリー: 高確50.00% / 超高確50.00%

### publicMorningNumbers
- 設定変更後天井600G+α（通常900G+αから短縮）。
- 200G到達時は高確以上100%。通常A/Bでは高確75%・超高確25%、通常Cでは高確50%・超高確50%。
- 設定変更時の開始モードA/B/C・天国A/B/C振り分け率は公開固定値を確認できず。

## modelHistory / conflicts
- 2023-02時点の検定通過資料には別型式 `L大工の源さん超夢源SE` / 検定番号 `2S1601` が存在する。
- 2023-11-06に実際に市場導入されたcanonical機は `L大工の源さん超夢源PH` / `3S0747`。SEをPHの同一型式として混同・上書きしない。
- baseGamesPer50は33.5G表記と約33G表記があるが、高精度掲載値33.5Gをcanonical、33Gは丸め表記として保持。

## missingFields
- 設定Lのボーナス初当り / CZ確率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 設定変更時の通常A/B/C・天国A/B/C開始振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
- 本機固有ガックン条件 / 発生率: UNVERIFIED_AFTER_RESEARCH。

## status
coreStatus: COMPLETE_CORE
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS

## sources
取得日: 2026-09-13
- グリーンべると / P-WORLD業界ニュース（発表・メーカー・導入日・RUSH性能）: https://news.p-world.co.jp/articles/25209/greenbelt
- 遊技日本（正式型式・新台発表）: https://yugi-nippon.com/pachinko-new-machine/post-60116/
- P-BOMB（正式型式・導入情報）: https://p-bomb.co.jp/industry/new-machine/7693/
- HAZUSE 基本情報・型式・検定番号・スペック: https://hazuse.com/machine/pachislot/3S0747/
- HAZUSE 天井・設定変更 / 電源ON-OFF比較: https://hazuse.com/machine/pachislot/3S0747/genre/207/
- HAZUSE 設定推測: https://hazuse.com/machine/pachislot/3S0747/genre/208/
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/9900
- 一撃 天井・設定変更・電源OFF/ON: https://1geki.jp/slot/l_d_gensantyomugen/3/
- 一撃 CZ「源チャレンジ」: https://1geki.jp/slot/l_d_gensantyomugen/49/
- なな徹 通常時内部状態・規定G数状態移行: https://nana-press.com/kaiseki/machine/611/17647/
- なな徹 BIG: https://nana-press.com/kaiseki/machine/611/17650/
- なな徹 REG: https://nana-press.com/kaiseki/machine/611/17651/
- パチマガスロマガ 通常時ボーナス: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/santhree_slot/04/bn01.php
- パチ＆スロ必勝本 基本スペック / 電源OFF-ON: https://p.hisshobon.jp/vpage/2566/2
- P-BOMB 旧SE型式検定通過情報: https://p-bomb.co.jp/industry/new-machine/6371/
