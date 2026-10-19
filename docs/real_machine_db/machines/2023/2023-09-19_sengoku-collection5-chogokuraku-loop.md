# 戦国コレクション5超極楽LOOP

recordNo: 1592
machineName: 戦国コレクション5超極楽LOOP
manufacturer: グレードワン製造 / コナミアミューズメント販売
formalModel: L戦国コレクション5GJ
inspectionCode: 2S1627
releaseDate: 2023-09-19
generation: 6.5号機 / スマスロ
systemType: AT / 規定コレ数管理 + シナリオ継続AT / 上位AT
settings: 1 / 2 / 3 / 4 / 5 / 6

## payoutRateBySetting
- 設定1: 97.5%
- 設定2: 98.9%
- 設定3: 100.4%
- 設定4: 104.0%
- 設定5: 107.9%
- 設定6: 110.0%
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### AT「異世界制覇ラッシュ」初当り
- 設定1: 1/346.8
- 設定2: 1/336.2
- 設定3: 1/325.9
- 設定4: 1/307.2
- 設定5: 1/297.8
- 設定6: 1/287.1
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約32.3G/50枚
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- AT「異世界制覇ラッシュ」: 約10.0枚/G
- 上位AT「Super異世界制覇ラッシュ」: 約10.0枚/G
信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- AT「異世界制覇ラッシュ」: 1セット20G+α、純増約10.0枚/G。継続率は8種類のシナリオで管理。
- 全シナリオ共通で5セット目の継続率は約95%。5セット目突破後は上位AT「Super異世界制覇ラッシュ」へ移行。
- 上位ATはセット継続率80% or 90%（1:1）。業界発表の期待枚数は約2770枚。
- エンディング後は超極楽モードへ移行し、128コレ以内のAT当選濃厚。超極楽モードATの継続シナリオ8選択率は約85%。
信頼度: OFFICIAL / INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は毎ゲーム1コレ以上を獲得し、規定コレ数到達でAT当選。
- モードA: 最大1280コレ / モードB: 最大768コレ / モードC: 最大384コレ / 天国・裏天国・超極楽: 最大128コレ。
- CZ「鬼ヶ島バカンス」は7G or 14G継続のコレ数上乗せゾーン。規定コレ到達を加速する補助CZであり、本DBでは詳細小役抽選を収集しない。
- 超極楽モードは基本的にエンディング後へ移行し、128コレ以内AT濃厚かつ継続シナリオ8を約85%で選択。
信頼度: OFFICIAL / INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_FOR_PUBLICLY_VERIFIABLE_FIELDS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更で有利区間、天井までのコレ数、内部状態、モードをRESET / 再抽選。
- 設定変更時はモードC・天国系の選択が優遇される。
- 設定変更後は高継続率シナリオ選択にも期待できる。
信頼度: OFFICIAL / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置きでは有利区間、天井までのコレ数、内部状態、モードをCARRY_OVER。
信頼度: ANALYSIS_HIGH

### powerCycleBehavior
- 設定変更を伴わない電源OFF→ONでは天井までのコレ数、モード、内部状態を引き継ぐ。
- 電源OFF→ON後のステージは実戦上「春ステージ」。液晶上のコレ表示の扱いは公開解析で「調査中」とされている。
- 純電断単独時の有利区間について、設定変更/据え置きと独立して明示した資料は十分に固定できず、UNVERIFIED_AFTER_RESEARCH とする。
信頼度: ANALYSIS_HIGH / UNVERIFIED（純電断単独の有利区間）

### gameCounterReset
- 本機は実ゲーム数ではなく規定コレ数が天井管理の中心。
- 設定変更: 天井までのコレ数をRESET / 再抽選。
- 据え置き: 天井までのコレ数CARRY_OVER。
- 純電源OFF→ON: 天井までのコレ数CARRY_OVER。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### ceilingAfterReset
- 通常最大天井は1280コレ。
- 設定変更時に固定384コレ天井へ一律短縮する仕様ではないが、モードC・天国系が優遇されるため朝一384コレ以内のAT当選期待が大幅に上がる。
- コナミ公式開発情報も「朝一は384コレ以内の当選の大チャンス」と明記。
信頼度: OFFICIAL / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更: モードRESET + 再抽選。
- 据え置き: モードCARRY_OVER。
- 純電源OFF→ON: モードCARRY_OVER。
- 設定変更後はモードC + 天国系の選択率が約54%。公式開発情報では設定変更後「モードC以上（裏天国、天国、モードC）割合が大幅にアップ」と説明。
- 設定変更時の6モード完全振り分け率は検索語・型式・公式/解析/旧資料系統を変えて再探索後も PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。
信頼度: OFFICIAL / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 設定変更: 内部状態RESET / 再抽選。
- 据え置き: 内部状態CARRY_OVER。
- 純電源OFF→ON: 内部状態CARRY_OVER。
信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### advantageousSectionReset
- 設定変更: 有利区間RESET。
- 据え置き: 有利区間CARRY_OVER。
- 有利区間ランプによる設定変更/据え置き判別は不可。
- 純電源OFF→ON単独時の有利区間契約は直接明記資料を固定できず UNVERIFIED_AFTER_RESEARCH。
信頼度: ANALYSIS_HIGH / UNVERIFIED（純電断単独）

### resetBenefits
- 設定変更後はモードC + 天国系の選択率が約54%まで上がり、384コレ以内の早いAT当選に期待できる。
- コナミ公式も朝一384コレ以内の当選を「大チャンス」として告知。
- 設定変更後、769コレ以上でAT当選した場合は継続シナリオ「高期待度」or「濃厚」の選択率が設定1で約25%、設定6で約43%。設定2～5は公開解析で調査中。
- 設定変更時は高継続率シナリオのチャンスとされる。
信頼度: OFFICIAL / ANALYSIS_HIGH

### resetPenalties
- 設定変更により前日の天井進行、モード、内部状態、有利区間を失う。
- 設定変更専用で比較可能な追加不利数値は NONE_CONFIRMED_AFTER_RESEARCH。

### resetDetection
- 有利区間ランプでは設定変更/据え置きを判別できない。
- なな徹は本機のリセット判別を「現在調査中」としている。
- 本機固有のガックン条件・発生率は「戦国コレクション5超極楽LOOP / L戦国コレクション5GJ / 設定変更 / リセット / 朝一 / ガックン / 判別」等で資料系統を変えて再探索したが、高信頼資料で固定できず UNVERIFIED_AFTER_RESEARCH。
- 設定変更・純電源OFF→ONとも実戦上は春ステージ開始のため、開始ステージだけでの確定判別は不可。
信頼度: ANALYSIS_HIGH / UNVERIFIED（ガックン）

### numericResetData
- 設定変更後 モードC + 天国系選択率: 約54%。
- 設定変更後769コレ以上到達時、高期待度or濃厚シナリオ選択率: 設定1 約25% / 設定6 約43% / 設定2～5 PUBLIC_VALUE_NOT_FOUND。
- モードA天井: 最大1280コレ。
- モードB天井: 最大768コレ。
- モードC天井: 最大384コレ。
- 天国 / 裏天国 / 超極楽天井: 最大128コレ。
- 設定変更時6モード完全振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH。

### publicMorningNumbers
- 設定変更後 モードC + 天国系選択率: 約54%。
- 公式表現: 朝一384コレ以内の当選が大チャンス。
- 設定変更後769コレ以上到達時の高期待度or濃厚シナリオ: 設定1 約25% / 設定6 約43%。

## conflicts
- CZ確率について一部二次資料に設定1約1/170→設定6約1/159の掲載があるが、設定表記崩れや導入日誤記を含む資料であり、主要高信頼解析で同一数値を固定できないため canonical には採用しない。

## missingFields
- 設定変更時の6モード完全振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定2～5の「設定変更後769コレ以上到達時・高期待度or濃厚シナリオ選択率」: PUBLIC_VALUE_NOT_FOUND
- 純電源OFF→ON単独時の有利区間契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-13
- コナミアミューズメント公式 製品一覧: https://www.konami.com/amusement/psm/ps/
  - 2023年9月稼働、スマスロ製品として掲載。
  - 信頼度: OFFICIAL
- コナミアミューズメント公式開発情報「本気おつ。」2023-09-15: https://www.konami.com/amusement/psm/portal/magihallo/magiotsu_25/20230915.html
  - 9月19日稼働、純増約10枚/G、朝一384コレ以内当選大チャンス、継続シナリオ優遇、上位AT80%/90%、超極楽128コレ以内・シナリオ8約85%。
  - 信頼度: OFFICIAL
- コナミアミューズメント公式開発情報 2023-08-04: https://www.konami.com/amusement/psm/portal/magihallo/magiotsu_23/20230804.html
  - 設定変更後モードC以上（裏天国/天国/モードC）割合大幅アップ、モードC後の移行特性、超極楽仕様。
  - 信頼度: OFFICIAL
- 遊技通信 東京都公安委員会検定通過状況2023年8月: https://www.yugitsushin.jp/news/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%812023%E5%B9%B48%E6%9C%88%E3%81%BE%E3%81%A8%E3%82%81%EF%BC%888%E6%9C%887/
  - 型式 L戦国コレクション5GJ、製造グレードワン、検定番号2S1627。
  - 信頼度: INDUSTRY
- 遊技日本 / P-WORLD 業界ニュース: https://news.p-world.co.jp/articles/25093/nippon
  - 製造元グレードワン、型式、設定別AT/出玉率、純増、AT基本性能、2023-09-19導入。
  - 信頼度: INDUSTRY
- グリーンべると新機種発表: https://news.p-world.co.jp/articles/24872/greenbelt
  - 設定1～6のAT/出玉率レンジ、純増約10枚/G、32.3G/50枚、AT/超極楽概要。
  - 信頼度: INDUSTRY
- P-WORLD 機種DB: https://www.p-world.co.jp/machine/database/9885
  - 設定別AT/出玉率、32.3G/50枚、天井、モード、設定変更時モードC以上約54%、769コレ以上時シナリオ優遇。
  - 信頼度: INDUSTRY / ANALYSIS_HIGH
- なな徹 スペック: https://nana-press.com/kaiseki/machine/614/16239/
  - 設定別AT/機械割、32.3G/50枚。
  - 信頼度: ANALYSIS_HIGH
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/614/16788/
  - 設定変更で有利区間/天井/内部状態/モードRESET、据え置き引継ぎ、モードC+天国系約54%、769コレ以上時25%～43%、有利区間ランプ判別不可。
  - 信頼度: ANALYSIS_HIGH
- 必勝本 基本スペック/天井設定変更: https://p.hisshobon.jp/vpage/2561/2
  - 2023-09-19導入、設定別AT/機械割、32.3G/50枚、純増、最大1280コレ、設定変更時の天井/モード/状態再抽選、電源OFF→ON時引継ぎ。
  - 信頼度: ANALYSIS_HIGH
- パチマガスロマガ 内部モード: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/konami_slot/23/tj04-1.php
  - モード別天井、設定変更時モードC以上優遇。
  - 信頼度: ANALYSIS_HIGH
- パチマガスロマガ CZ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/konami_slot/23/cz01.php
  - 鬼ヶ島バカンス7G/14G、コレ獲得型CZ。
  - 信頼度: ANALYSIS_HIGH

coreStatus: COMPLETE_CORE
recordStatus: COMPLETE_CORE
