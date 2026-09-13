# パチスロ 炎炎ノ消防隊

recordNo: 1561
machineName: パチスロ 炎炎ノ消防隊
manufacturer: ジェイビー（SANKYO）
formalModel: S炎炎ノ消防隊jS
inspectionCode: 2S1217
releaseDate: 2023-05-08
generation: 6.5号機 / メダル機
systemType: AT / 疑似ボーナス + ボーナス高確率「炎炎激闘」
settings: 1 / 2 / 4 / 5 / 6 / L
coreStatus: COMPLETE_CORE

## payoutRateBySetting
- 設定1: 97.3%
- 設定2: 98.9%
- 設定4: 102.7%
- 設定5: 105.3%
- 設定6: 108.6%
- 設定L: 84.5%

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### 初当りボーナス
- 設定1: 1/243
- 設定2: 1/240
- 設定4: 1/224
- 設定5: 1/218
- 設定6: 1/208
- 設定L: UNVERIFIED

### 炎炎激闘 初当り
- 設定1: 1/689
- 設定2: 1/652
- 設定4: 1/581
- 設定5: 1/535
- 設定6: 1/479
- 設定L: UNVERIFIED

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約33.2G/50枚（設定1代表値）

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- 疑似ボーナス中: 約5.0枚/G
- 炎炎激闘後は通常時潜伏を経由するため、ループ全体を疑似ボーナス純増5.0枚/Gと同一定義で扱わない。

信頼度: INDUSTRY + ANALYSIS_HIGH

## basicPayout
- 炎炎BONUS: 40G、約200枚。
- REGULAR BONUS: ベルナビ10回、平均約75枚。
- エピソードボーナス: ベルナビ10回、平均約75枚。終了後は炎炎激闘へ。
- 炎炎激闘: 1セット15G+α、ボーナス期待度約60%。
- アドラバースト: 初期20G+α。森羅万象（廻）とのループで上位出玉契機を形成。

## modeSpecificMinimumData
- 通常時はレア役・十字目変換・規定ゲーム数で初当りボーナスを抽選。
- 通常天井は最大850G+α。
- 通常モード: 通常A 850G+α / 通常B 750G+α / 通常C 250G+α / 天国 88G+α。
- 設定変更後のみ朝イチA 650G+α / 朝イチB 250G+αが選択対象になる。
- 初当りボーナス後は「伝導者の影」でエピソードボーナスを抽選し、当選後は炎炎激闘へ移行する。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_PUBLIC_MORNING_NUMBERS_AND_PARTIAL_POWER_CYCLE
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井RESET。通常最大850G+αから設定変更後最大650G+αへ短縮。
- 内部状態RESET。
- 通常時モードRESET・再抽選。
- 設定変更後は朝イチA / 朝イチB / 天国のいずれかへ移行。
- 通常時の見た目上の開始ステージは第8特殊消防教会。
- メニュー画面のG数・炎炎激闘回数は初期化される。
- メニュー画面の最大連チャン数は引き継ぐ。

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- 天井CARRY_OVER。
- 内部状態CARRY_OVER。
- モードCARRY_OVER。
- 通常時なら開始ステージは設定変更時と同じ第8特殊消防教会で、ステージ単独では判別できない。
- メニュー画面のG数・炎炎激闘回数は通常の電断時間では初期化される場合がある一方、短時間の電断では引き継ぐ旨の解析注記あり。表示履歴は内部天井契約と分離して扱う。
- 最大連チャン数は引き継ぐ。

### powerCycleBehavior
- 純電源OFF→ON時の天井ゲーム数: CARRY_OVER（機種固有解析の設定変更/電源OFF→ON比較で確認）。
- 純電源OFF→ON時の内部状態: CARRY_OVER（同比較で確認）。
- 開始ステージ: 通常時なら第8特殊消防教会。
- メニュー画面のG数・炎炎激闘回数は長時間電源OFFで初期化される一方、短時間電断では引き継ぐ旨の解析があり、電断時間依存の表示挙動として保持。
- モード・有利区間そのものの純電断時CARRY_OVERを独立列で直接明示する高信頼資料は、検索語・資料系統を変えた再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。天井/内部状態から推測転記しない。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 表示上のメニューG数は電断時間によって初期化される場合があるため、内部天井ゲーム数と混同しない。

### ceilingAfterReset
- 通常最大天井: 850G+α。
- 設定変更後最大天井: 650G+α。
- 朝イチB: 250G+α。
- 天国: 88G+α。
- 650G+αを超えて初当りボーナス非当選なら据え置き濃厚材料となる。

### modeAfterReset
- 設定変更時は朝イチA / 朝イチB / 天国へ再抽選。
- 公開振り分け: 朝イチA 約38% / 朝イチB 約27% / 天国 約35%（全設定共通として複数解析で一致）。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`（独立契約の直接資料不足）。

### stateAfterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間ランプによる設定変更/据え置き判別は不可。
- ボーナス終了時の一部・エンディング終了後にも有利区間が切れるが、朝一設定変更契約とは別に扱う。

### resetBenefits
- 天井が通常最大850G+αから最大650G+αへ短縮。
- 約35%で天国（88G+α天井）。
- 約27%で朝イチB（250G+α天井）。
- 設定変更後は朝イチ専用モードが選択され、早いG数の初当り期待が通常時より高い。

### resetPenalties
- 設定変更で前日の天井進行・内部状態・モードを失う。
- 設定変更固有の追加ペナルティ数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 650G+αを超えて初当りボーナス非当選なら据え置き濃厚。
- 88G付近で規定ゲーム数前兆が発生すれば設定変更濃厚材料。発生しなければ据え置きまたは朝イチBの可能性。
- 朝イチB選択時は150G付近の前兆が判別材料になる。ゾーン外前兆や前日G数との整合も据え置き推測材料。
- 設定変更/据え置きとも通常時は第8特殊消防教会スタートのため、開始ステージ単独での判別は不可。
- 有利区間ランプ判別不可。
- 本機固有ガックンは実戦・個人資料に報告があるが、固定仕様として採用できる高信頼資料を確認できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
#### 設定変更時モード振り分け
- 朝イチA: 約38%（最大650G+α）
- 朝イチB: 約27%（最大250G+α）
- 天国: 約35%（最大88G+α）

#### 天井
- 通常最大: 850G+α
- 設定変更後最大: 650G+α
- 短縮幅: 最大200G

#### 公開朝一期待値関連数値
- 設定変更時の天国選択: 約35%。
- 別解析では設定変更後119G以内のボーナス期待度を約38%と掲載。
- 250G以内の規定ゲーム数由来ボーナス当選率を約62%とする解析があるが、レア役・十字目変換を含む実当選率とは定義が異なるため分離して保持。

### publicMorningNumbers
- 朝イチA 約38% / 朝イチB 約27% / 天国 約35%。
- 最大天井650G+α。
- 天国天井88G+α / 朝イチB天井250G+α。
- 設定変更後119G以内ボーナス期待度 約38%（解析値）。
- 250G以内の規定ゲーム数由来ボーナス当選率 約62%（解析値、レア役等を含まない定義）。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `パチスロ 炎炎ノ消防隊 / S炎炎ノ消防隊 / S炎炎ノ消防隊jS / ジェイビー / SANKYO / 2S1217` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電源断 / 天井 / モード / 内部状態 / 有利区間 / ガックン / 変更判別` を組み替えて検索。
- 2024年スマスロ版 `Lパチスロ炎炎ノ消防隊` の情報は別機種として除外。
- 遊技日本/P-WORLD、SANKYO発表系、なな徹、HAZUSE、一撃、必勝本、ちょんぼりすた、旧解析/回顧系を横断。
- 純電断は天井・内部状態のCARRY_OVERまでは直接比較資料で固定。モード・有利区間は独立明示を固定できないため推測せず欠損保持。

## conflicts
- 設定変更後119G以内期待度約38%、250G以内規定ゲーム数由来約62%など朝一数値は集計対象・定義が異なるため、同一指標として平均化しない。
- 2024年スマスロ版は同名だが別型式・別性能のため混入禁止。

## missingFields
- pure power OFF→ON mode carry-over: `UNVERIFIED_AFTER_RESEARCH`
- pure power OFF→ON advantageous-section carry-over: `UNVERIFIED_AFTER_RESEARCH`
- machine-specific reel-gakkun fixed contract/rate: `UNVERIFIED_AFTER_RESEARCH`

## sources
取得日: 2026-09-13

- 遊技日本 / P-WORLD「炎炎Wループが延々に終わらない！？…」: https://news.p-world.co.jp/articles/23232/nippon
  - 製造元ジェイビー、型式 `S炎炎ノ消防隊jS`、設定別初当り/炎炎激闘/出玉率、基本ゲーム性。
- 遊技日本 / P-WORLD 先行映像記事: https://news.p-world.co.jp/articles/22991/nippon
  - 製造元ジェイビー、型式 `S炎炎ノ消防隊jS`。
- 一撃 リリース情報: https://1geki.jp/repo/20230202sankyo_a/
  - 6.5号機、純増約5枚、2023-05-08導入予定。
- パチビー: https://www.pachibee.jp/machines/index/223030003
  - 2023-05-08導入、6.5号機AT、純増約5枚、疑似ボーナス仕様。
- なな徹 解析まとめ: https://nana-press.com/kaiseki/machine/526/
  - 約33.2G/50枚、最大850G+α、設定別性能。
- なな徹 設定別確率/機械割: https://nana-press.com/kaiseki/machine/526/13601/
  - 設定別初当り・炎炎激闘・機械割、設定L 84.5%。
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/526/14738/
  - 設定変更/据え置きの有利区間・天井・状態・モード、開始ステージ、650G短縮、前兆判別、有利区間ランプ。
- なな徹 モード: https://nana-press.com/kaiseki/machine/526/15236/
  - 朝イチ専用モード、通常モード、各天井。
- HAZUSE: https://hazuse.com/machine/pachislot/2S1217/genre/209/
  - 型式 `S炎炎ノ消防隊jS`、検定番号 `2S1217`、設定変更時38/27/35%、基本システム。
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/2S1217/genre/201/
  - 型式・検定番号・導入日・純増。
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/vpage/2523/2
  - 約33.2G/50枚、純増約5.0枚/G、2023-05-08。
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/182657/
  - 設定変更/電源OFF→ONの天井・内部状態比較、朝イチモード38/27/35%、119G以内約38%、表示履歴、前兆判別。
- ぽこすろっと: https://www.nankaikoya.jp/enennoshouboutai-kitaichi/
  - 朝イチモード38/27/35%、250G以内規定ゲーム数由来約62%、650G短縮。
