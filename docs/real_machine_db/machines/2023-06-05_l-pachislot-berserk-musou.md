# Lパチスロベルセルク無双

recordNo: 1568
machineName: Lパチスロベルセルク無双
manufacturer: EXCITE（ニューギングループ）
formalModel: Lパチスロベルセルク無双EV
inspectionCode: 3S0001
releaseDate: 2023-06-05
generation: 6.5号機 / スマスロ
systemType: AT / ゲーム数管理型 / CZ経由あり
settings: L / 1 / 2 / 4 / 5 / 6（通常営業用比較値は1/2/4/5/6）

## payoutRateBySetting
- 設定1: 97.6%
- 設定2: 98.5%
- 設定4: 104.9%
- 設定5: 107.9%
- 設定6: 110.4%
- 設定L: 比較可能な公開機械割は `UNVERIFIED_AFTER_RESEARCH`。下パネル常時点滅が識別要素として複数解析で公開。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### AT「無双狂RUSH」初当り
- 設定1: 1/390.3
- 設定2: 1/373.8
- 設定4: 1/292.5
- 設定5: 1/260.9
- 設定6: 1/238.4
- 設定L: `UNVERIFIED_AFTER_RESEARCH`

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約35.5G/50枚。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- AT「無双狂RUSH」: 約2.5枚/G。
- 「狂喜解放」等の高純増状態、および上位AT側: 約5.0枚/G。

信頼度: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- AT「無双狂RUSH」はゲーム数管理型。
- 初回セットは50G。
- 2セット目以降は30G以上。キャラにより基本G数が異なり、公開資料ではガッツ30G、ゾッド60G、グリフィス100G系統。
- エンディング到達後は上位AT突入チャレンジへ移行。
- 上位側の「超転生ボーナス」は20G・純増約5.0枚/G、その後「ベルセルクエクストラ」20G以上とのループ構造。

信頼度: INDUSTRY + ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は主にレア役などからCZを経由しATを目指す。
- CZ「鉄塊激闘」期待度約50%、上位CZ「ノスフェラトゥバトル」期待度約80%。
- 通常ゲーム数天井は999G+αでAT当選。
- 「ベヘリットモード」「鉄塊連モード」「穢れ」等を搭載するが、完全再現用の全移行テーブルは本DB対象外。
- エンディング後の一連の失敗後に「バーサーカーモード」へ移行する経路があり、当時資料では滞在時出率119.99%と案内された。これは通常設定機械割とは別定義の特殊状態性能として分離保持。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_PUBLIC_INITIAL_KEGARE_DISTRIBUTION
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井までの内部ゲーム数RESET。
- 内部状態RESET / 再抽選。
- ベヘリットモードRESET / 再抽選。
- 鉄塊連モードは非鉄塊連モードへ。
- CZレベル再抽選。
- 穢れポイント再抽選。
- 朝一ステージは城下町ステージ、ベヘリットポイント表示は「?」から開始する資料で一致。

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- 天井ゲーム数CARRY_OVER。
- 内部状態CARRY_OVER。
- ベヘリットモードCARRY_OVER。
- 穢れCARRY_OVER。
- ベヘリットポイント表示や開始画面だけでは設定変更との直接判別は困難。

### powerCycleBehavior
- 純電源OFF→ONでは天井までのゲーム数CARRY_OVER。
- 内部状態CARRY_OVER。
- 鉄塊連モードCARRY_OVER。
- 穢れCARRY_OVER。
- 複数解析では内部モード / 有利区間も引継ぎ扱い。
- ベヘリットモード、ベヘリットポイント、ベヘリットチャンスについて、必勝本の機種固有比較表では当時「調査中」が残るため、各下位要素は一般論で補完せず `PARTIAL_DIRECT_DISCLOSURE` とする。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 通常最大天井: 999G+α。

### ceilingAfterReset
- 設定変更専用の固定短縮天井は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更後も公開上の最大ゲーム数天井は999G+αとして扱う。

### modeAfterReset
- 設定変更: ベヘリットモードRESET / 再抽選。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: 高信頼二次資料では内部モード引継ぎ。必勝本ではベヘリットモード単独欄が「調査中」のため、詳細下位モードについては競合ではなく開示粒度差として保持。
- 鉄塊連モードは設定変更時「非鉄塊連モードへ」、純電断時はCARRY_OVER。
- 設定変更時ベヘリットモードの具体的振り分け数値は、表記・型式・メーカー・朝一/リセット/モード振り分けで再探索したが `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更: 内部状態RESET / 再抽選。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- CZレベルは設定変更時再抽選。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER（解析資料）。
- 有利区間ランプによる設定変更 / 据え置き判別は不可。

### resetBenefits
- 最大の明確な朝一恩恵は「穢れ」初期ポイント優遇。
- 設定変更時は約40%で90ptスタート。
- 穢れ100pt保持状態でガッツATに当選すると、AT引き戻しゾーン「無双狂鳴」を獲得した状態で開始するため、朝一の出玉期待へ影響する。
- 実戦集計で朝一初回AT平均獲得が通常より高いとする低信頼経験値資料も存在するが、機械仕様値には昇格させない。

### resetPenalties
- 設定変更により前日の天井進行、内部状態、ベヘリットモード、鉄塊連モード、穢れ蓄積を失う。
- 穢れは再抽選で高ポイント開始恩恵がある一方、前日100pt近辺など有利な蓄積を保持していた場合は消滅する。
- その他の設定変更専用不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更 / 据え置きとも、見た目だけでの確定判別は困難。
- ベヘリットポイント表示は朝一「?」表示となり、これ単独ではリセット判別不可。
- 設定変更時・純電断時とも城下町ステージ開始とする比較資料があり、開始ステージ単独でも判別不可。
- 有利区間ランプ判別不可。
- 前日ゲーム数を把握している場合、据え置きなら999G天井の内部進行を引き継ぐため、当日の天井発動位置が補助材料になり得る。
- 本機固有のリールガックン条件 / 発生率は、`Lベルセルク無双 / Lパチスロベルセルク無双EV / EXCITE / ニューギン` と `ガックン / リール始動 / 設定変更 / 据え置き / 朝一` を組み替えて再探索したが `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更時の穢れ初期ポイント:
  - 0pt: 28.77%
  - 30pt: 6.25%
  - 60pt: 25.00%
  - 90pt: 39.98%
- 60pt以上スタート合計: 64.98%。
- 90ptスタート: 39.98%（約40%）。
- 通常 / リセット共通の公開最大ゲーム数天井: 999G+α。
- 設定変更専用ベヘリットモード振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### publicMorningNumbers
- 設定変更時の穢れ初期ポイントは 0/30/60/90pt = **28.77 / 6.25 / 25.00 / 39.98%**。
- **64.98%で60pt以上、39.98%で90pt**から開始。
- 固定短縮天井は確認されず、最大天井は999G+α。
- 朝一専用AT/CZ初当り率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `Lベルセルク無双 / スマスロベルセルク無双 / Lパチスロベルセルク無双EV / EXCITE / ニューギン` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / ベヘリット / 鉄塊連 / 穢れ / ガックン / 有利区間` を組み替えて検索。
- 公安委員会検定系業界記事、業界プレス、導入直後記事、パチ＆スロ必勝本、なな徹、スロパチクエスト、ちょんぼりすた、K-Navi、パチマガスロマガ、旧DB/回顧系を横断。
- 設定変更 / 据え置きの有利区間・天井・内部状態・ベヘリットモード・穢れはなな徹の直接比較で確認。
- 純電断時の天井・状態・鉄塊連・穢れは必勝本の機種固有比較表で確認。
- ガックン、設定変更専用ベヘリットモード振り分け、朝一専用AT/CZ率は十分な再探索後も固定できず一般論で補完しない。

## sources
取得日: 2026-09-13

### 公的 / 業界
- PiDEA X 東京都公安委員会検定通過（型式 / 検定番号）: https://www.pidea.jp/articles/1679881788
- グリーンべると 高知県公安委員会検定通過: https://web-greenbelt.jp/post-69770/
- Amusement Japan ニューギン直営店先行導入: https://amusement-japan.co.jp/article/detail/10003498/
- Amusement Japan ファン試打会: https://amusement-japan.co.jp/article/detail/10003516/
- P-Summa 導入直後記事: https://psumma.jp/pachislo/58231/

### 解析 / DB
- パチ＆スロ必勝本 基本スペック / 天井&設定変更: https://p.hisshobon.jp/vpage/2539/2
- なな徹 朝一 / 設定変更 / 有利区間: https://nana-press.com/kaiseki/machine/548/15200/
- なな徹 天井: https://nana-press.com/kaiseki/machine/548/15198/
- スロパチクエスト 天井 / 朝一 / 穢れ: https://www.slopachi-quest.com/article/berserkmusou-tenjou/
- スロパチクエスト 設定差: https://www.slopachi-quest.com/article/berserkmusou-settei/
- ちょんぼりすた: https://chonborista.com/slot/newgin-slot/185178/
- K-Navi: https://p-kn.com/slot/3963/
- パチマガスロマガ 穢れ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/excite_slot/16/tj10.php

## missingFields
- 設定Lの比較可能な機械割 / AT初当り: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用ベヘリットモード振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 朝一専用AT/CZ初当り率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 本機固有ガックン条件 / 発生率: `UNVERIFIED_AFTER_RESEARCH`。

## conflicts
### releaseDate
- canonical: **2023-06-05**。
- 根拠: パチ＆スロ必勝本、スロパチクエスト、ちょんぼりすた、P-Summa（6/5全国ホール登場）など複数の導入・稼働資料が一致。
- conflict: Amusement Japanの2023-05-23記事末尾に「ホール導入は6月19日からの予定」とする記述あり。
- 判定: `CONFLICT_SINGLE_INDUSTRY_ARTICLE_VS_MULTI_SOURCE_ACTUAL_OPERATION`。6/5を正本採用し、6/19表記を消さず保持。

### manufacturerNotation
- 型式検定・販売資料ではメーカー `EXCITE`。一部一般解析は `ニューギン` または `ニューギン(EXCITE)` 表記。
- 本DBでは正式製造名義を優先し `EXCITE（ニューギングループ）` とする。

## status
coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_PUBLIC_INITIAL_KEGARE_DISTRIBUTION
