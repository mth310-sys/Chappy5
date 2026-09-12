# パチスロ 真俺の空

recordNo: 1540
machineName: パチスロ 真俺の空
manufacturer: スパイキー（総発売元: フィールズ）
formalModel: S真俺の空ST
inspectionCode: 2S1075
releaseDate: 2022-12-19
generation: 6.5号機 / メダル機 / 有利区間最大4000G世代
systemType: AT / ゲーム数上乗せ + 擬似ボーナス / 上位AT搭載

## payoutRateBySetting
- 設定L: 公開値未固定
- 設定1: 97.6%
- 設定3: 99.2%
- 設定4: 104.2%
- 設定5: 109.5%
- 設定6: 110.0%

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

注記:
- なな徹、一撃、Pachiseven、ちょんぼりすた等の複数解析は設定構成を L / 1 / 3 / 4 / 5 / 6 として一致。
- ぱちんこキュレーションには同じ99.2%・CZ 1/190.0・AT 1/280.1を「設定2」とする表記があるため、設定番号のみ `CONFLICT_SOURCE_LABEL` として保持する。主要複数解析一致をcanonicalとして設定3を採用し、平均・自動修正は行わない。

## initialHitBySetting
### CZ「俺タイム」
- 設定1: 1/196.8
- 設定3: 1/190.0
- 設定4: 1/179.4
- 設定5: 1/172.2
- 設定6: 1/177.5
- 設定L: 公開値未固定

### AT初当たり
- 設定1: 1/293.2
- 設定3: 1/280.1
- 設定4: 1/253.5
- 設定5: 1/230.1
- 設定6: 1/162.7
- 設定L: 公開値未固定

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約33G/50枚。

信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- AT / 擬似ボーナス: 約2.6枚/G。

信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- AT初当たり時は10Gの「俺のハーレム」で初期G数を決定後、赤7「俺のAT」または青7「俺のPARTY」へ移行。
- 「俺のAT」: 初期G数は俺のハーレムで決定。純増約2.6枚/G。約1/13でゲーム数上乗せが発生する設計。
- 「俺BONUS」: 20G、純増約2.6枚/G、1G連期待度約56%。
- 上位AT「俺のPARTY」: 純増約2.6枚/G。上乗せ契機が主に「俺のセレモニー」となる高性能AT。
- 最上位トリガー「BIGMAN BONUS」: 1セット20G、トータル継続率約97%、突入時期待獲得枚数約3400枚。

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時はリプ連、レア役、規定ゲーム数、CZ成功の複数ルートでATを抽選。
- CZ「俺タイム」は15G+α、成功期待度約40%。
- 規定ゲーム数は32G / 99G / 256G / 999G。
- 解析上のモード別最大規定G数: 通常999G / チャンス256G / 天国99G / 超天国32G。
- 通常時最大999G+α消化でAT当選。
- 通常時の各種抽選込み100G以内AT当選期待度は約30%とする解析あり。設定変更専用値か通常共通値かは資料で定義差があるため、resetBenefitsとは分離して保持。
- 有利区間最大4000G。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_UNVERIFIED_RESET_SPECIFIC_MODE_NUMBERS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井 / 規定ゲーム数進行RESET。
- 内部状態RESET。
- モードRESET / 再抽選。
- 設定変更専用のモード振り分け率は公開値を固定できていない。

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- 天井 / 規定ゲーム数進行CARRY_OVER。
- 内部状態CARRY_OVER。
- モードCARRY_OVER。

### powerCycleBehavior
- 純電源OFF→ON時は天井CARRY_OVERを機種別解析で確認。
- 内部状態CARRY_OVERも機種別解析で確認。
- モード / 有利区間について純電断単独の機種別直接契約を明示する高信頼資料は、表記・型式・メーカー・電断語を変えた再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的な6.5号機挙動からは補完しない。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER確認。
- 最大天井は通常999G+α。

### ceilingAfterReset
- 設定変更によって天井進行はリセットされる。
- 通常 / チャンス / 天国 / 超天国の最大規定G数は999G / 256G / 99G / 32G。
- 設定変更時だけ最大天井が999G未満へ固定短縮されるという高信頼な公開契約は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一モード再抽選により早い規定G数が選ばれる可能性はあるが、固定短縮天井と混同しない。

### modeAfterReset
- 設定変更: RESET / 再抽選。
- 据え置き: CARRY_OVER。
- モードは通常 / チャンス / 天国 / 超天国。
- 設定変更時の各モード振り分け率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 純電源OFF→ON時のモード直接契約は `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER確認。

### advantageousSectionReset
- 設定変更: 有利区間RESET。
- 据え置き: CARRY_OVER。
- 有利区間ランプでは設定変更 / 据え置きを判別できないとする高信頼解析あり。
- 純電源OFF→ON単独時の有利区間契約は `UNVERIFIED_AFTER_RESEARCH`。
- 稼働中の有利区間リセット条件の完全な公開契約は今回の物差し用途では取得不要。朝一挙動に必要な設定変更 / 据え置き契約を優先した。

### resetBenefits
- 高信頼解析では設定変更時の追加恩恵を「調査中」としており、設定変更専用の確定天井短縮・AT直撃率・CZ優遇率は確認できない。
- 二次の朝一攻略資料では、リセット朝一の100G以内AT期待度を設定不問で約30%とする記載を確認。ただし、なな徹では「通常時の各種抽選込み100G以内期待度約30%」としておりリセット専用値と断定できないため、`ANALYSIS_SINGLE_RESET_CONTEXT / NOT_CONFIRMED_AS_RESET_EXCLUSIVE` として保持。

### resetPenalties
- 設定変更で前日の天井 / 規定ゲーム数進行、内部状態、モードを失う。
- 設定変更専用の追加不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 高信頼解析ではリセット判別は「調査中」。
- 有利区間ランプによる設定変更 / 据え置き判別は不可。
- 本機固有のガックン条件 / 発生率は `パチスロ 真俺の空 / 真俺の空 / S真俺の空ST / スパイキー / クロスアルファ / フィールズ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / ガックン / リールガックン / 有利区間` を組み替え、業界記事・解析・旧DB・回顧資料を横断したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井到達位置のズレは据え置き推測材料になり得るが、単独の変更確定契約としては扱わない。

### numericResetData
- 通常最大天井: 999G+α。
- モード別最大規定G数: 通常999G / チャンス256G / 天国99G / 超天国32G。
- 設定変更時の固定短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 設定変更時モード振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 朝一100G以内AT期待度: 約30%とする朝一攻略資料あり。ただし通常時共通約30%とする高信頼解析もあるため、リセット専用数値としては確定しない。

### publicMorningNumbers
- リセット朝一100G以内AT期待度: 約30%（朝一攻略二次資料）。
- canonical扱い: `NOT_CONFIRMED_AS_RESET_EXCLUSIVE`。通常時共通の100G以内AT期待度約30%との定義差を保持。

### resetBehavior 再探索メモ
- 取得 / 再探索日: 2026-09-13。
- `パチスロ 真俺の空 / 真俺の空 / S真俺の空ST / スパイキー / クロスアルファ / フィールズ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 天井短縮 / モード / モード振り分け / ガックン / 有利区間` を組み替えて検索。
- メーカー発表を伝える業界記事、検定情報、ホール向け販売資料、なな徹、一撃、Pachiseven、ちょんぼりすた、K-Navi、旧DB / 朝一攻略資料を横断。
- 最初の未発見だけでUNVERIFIEDにせず、設定変更専用モード振り分け、純電断時のモード / 有利区間、本機固有ガックンのみを欠損として残した。

## sources
取得日: 2026-09-13

- 遊技日本 / P-WORLD「パチスロ新台『パチスロ真俺の空』PVが公開」: https://news.p-world.co.jp/articles/21900/nippon
  - 製造元スパイキー、型式S真俺の空ST、クロスアルファグループ6.5号機第2弾。
- 遊技日本 / P-WORLD「リプレイの連続が要！パチスロ新台『パチスロ 真俺の空』が登場」: https://news.p-world.co.jp/articles/22191/nippon
  - 型式、ゲーム性、AT、BIGMAN BONUS約97%・期待約3400枚。
- GreenBelt / P-WORLD「12/19新台 約97%ループの超高継続ボーナス搭載」: https://news.p-world.co.jp/articles/22549/greenbelt
  - 2022-12-19実導入、スパイキー、純増約2.6枚/G、主要AT仕様。
- G-net「S真俺の空ST 販売概要」: https://g-net-ps.com/info/s0048/
  - 2022-12-19開店日、純増2.6枚/G、ベース約33G。
- G-net「検定通過情報 令和4年10月14日公示分」: https://g-net-ps.com/industry/certif-2022-1014/
  - 型式S真俺の空ST、メーカー スパイキー、検定番号2S1075。
- 鹿児島県公報 令和4年10月18日 第355号: https://www.pref.kagoshima.jp/ab04/kensei/jourei/kouhou/2206/documents/101788_20221017131346-1.pdf
  - 公安委員会告示、型式S真俺の空ST、スパイキー、検定番号2S1075。
- ゼンリン 検定情報: https://zenrin-net.com/kenteis/listsend?machinesort_id=2&order_date=2025
  - 型式、2022-10-14検定、検定番号第2S107500号。
- なな徹 総合解析: https://nana-press.com/kaiseki/machine/475/
  - 設定別CZ/AT/機械割、ベース、純増、天井、通常時100G以内約30%、設定変更/据え置きの有利区間・天井・内部状態・モード、判別、有利区間ランプ。
- なな徹 天井: https://nana-press.com/kaiseki/machine/475/12879/
  - 最大999G+α、32/99/256/999G規定G数。
- なな徹 AT解析: https://nana-press.com/kaiseki/machine/475/12886/
  - 俺のAT、俺BONUS、BIGMAN BONUS性能。
- 一撃 設定判別: https://1geki.jp/slot/s_shin_orenosora/0/
  - 設定別AT/CZ、設定構成。
- 一撃 小役/ベース: https://1geki.jp/slot/s_shin_orenosora/4/
  - 約33G/50枚。
- Pachiseven 設定判別: https://pachiseven.jp/machines/6658/cutout/4
  - 2022-12-19、スパイキー、6.5号機、最大999G、設定別CZ/AT。
- ちょんぼりすた: https://chonborista.com/slot/spiky/176383/
  - 6.5号機、設定別性能、モード別天井、設定変更時天井/状態RESET、純電源OFF→ON時天井/状態引継ぎ。
- フリック7 朝一リセットガイド2022: https://flick7.net/slot/reset_guide2022.php
  - リセット朝一100G以内AT期待度約30%との二次資料記載。リセット専用値としては高信頼解析との定義差を保持。
- ぱちんこキュレーション: https://pachinko-curation.com/?p=34440
  - 型式、純増、ベース、性能数値。99.2%等を設定2とする設定番号表記差をCONFLICT_SOURCE_LABELとして保持。

## missingFields
- 設定Lの機械割 / CZ / AT公開値: UNVERIFIED_AFTER_RESEARCH
- 設定変更時のモード振り分け率: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 純電源OFF→ON時のモード / 有利区間直接契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有ガックン条件 / 発生率: UNVERIFIED_AFTER_RESEARCH

## conflicts
- 設定構成の第2実用設定番号: 主要複数解析は「設定3」、ぱちんこキュレーションは同一性能値を「設定2」と表記。canonicalは設定3、単一資料の設定2表記を `CONFLICT_SOURCE_LABEL` として保持。
- 朝一100G以内AT期待度約30%: 朝一攻略資料はリセット朝一として記載する一方、なな徹は通常時各種抽選込みの一般値として記載。数値自体は一致するが「リセット専用値」かの定義が一致しないため、reset-exclusiveとは断定しない。

## status
- coreStatus: COMPLETE_CORE
- resetBehaviorQA: COMPLETE_RESET_CORE_WITH_UNVERIFIED_RESET_SPECIFIC_MODE_NUMBERS
- confidence: HIGH core / HIGH setting-change-and-carryover reset core / HIGH inspectionCode / MEDIUM publicMorningNumbers definition / some pure-power-cycle fields and gackun UNVERIFIED_AFTER_RESEARCH
