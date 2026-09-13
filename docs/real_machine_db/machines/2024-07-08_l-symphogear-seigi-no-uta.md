# Lパチスロ 戦姫絶唱シンフォギア 正義の歌

recordNo: 1659
machineName: Lパチスロ 戦姫絶唱シンフォギア 正義の歌
aliases: L戦姫絶唱シンフォギア 正義の歌 / スマスロ シンフォギア 正義の歌 / シンフォギア 正義の歌 / L戦姫絶唱シンフォギア 正義の歌jA
manufacturer: ジェイビー製造 / SANKYOブランド・販売
formalModel: L戦姫絶唱シンフォギア 正義の歌jA
inspectionCode: 3S1917
releaseDate: 2024-07-08
generation: 6.5号機 / スマスロ
systemType: AT
settings: L / 1 / 2 / 4 / 5 / 6（設定3なし・実質5段階設定）
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- SANKYOオンライン博物館は導入年月を2024.07と掲載。
- HAZUSE、パチ&スロ必勝本、P-WORLD、K-Naviはいずれも2024-07-08導入で一致。
- 2024-06-21のグリーンべると記事も7月8日からホール導入開始予定と報道。
confidence: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modelEvidence
- HAZUSEで型式 `L戦姫絶唱シンフォギア 正義の歌jA`、検定番号 `3S1917` を確認。
- 2024-03-14のグリーンべると/P-WORLD検定通過記事で、山口県公安委員会3月13日付け公示として同型式、製造者ジェイビーを確認。
- 遊技通信/遊技日本も型式名とジェイビー製造、SANKYOブランド機として報道。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 98.2%
- setting2: 99.4%
- setting4: 104.4%
- setting5: 108.3%
- setting6: 114.9%
- settingL: PUBLIC_VALUE_NOT_APPLICABLE（下パネル消灯）
initialHitBySetting:
- atInitial:
  - setting1: 1/295
  - setting2: 1/285
  - setting4: 1/250
  - setting5: 1/227
  - setting6: 1/199
baseGamesPer50: 約32G/50枚（後年整理で約31.7G表記あり）
netIncrease:
- AT AXZラッシュ: 約2.8枚/G
- 上位AT AXZラッシュ黄金: 約5.0枚/G
basicPayout:
- AT AXZラッシュ: 初期40G以上。突入時1Gの「わたしは歌でぶん殴るッ！」で初期G数を決定し、通常成立役40G・ベル50G・レア役100G、ギアフラグなら上位初期G数決定ゾーン「絶唱」へ。
- シンフォギアBONUS: 20G
- 上位ATは純増約5.0枚/G。
confidence: INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は天井G数を管理する「通常 / 天国準備 / 天国」の3モード。天国は100G以内、通常/天国準備は最大777G+α。
- 主な通常時ルートはレア役・規定G数からCZまたはAT直撃。CZ「AXZバトル」は成功期待度約65%。
- ギアフラグ成立時のAT抽選に関わるギアフラグモード、CZ抽選に関わるCZモード、天国高ループに関わるエクスドライブモードが存在するが、物差しDBではリセット挙動に必要な範囲だけ保持する。
- 抜剣はフォニック目規定回数（最大10回）から突入する10Gのギアフラグ高確率状態。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_GAKKUN_AND_HIGH_SETTING_RESET_MODE_DISTRIBUTION_UNVERIFIED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間RESET。
- 天井までの内部ゲーム数RESET。
- 天井モード、エクスドライブモード、ギアフラグモード、CZ抽選テーブル/モード、内部状態を再抽選。
- 抜剣メーターは見た目・内部ともリセット扱い。
- 液晶ゲーム数は0G表示。
- 通常時の開始ステージはリディアン音楽院またはフードパークで1:1。
confidence: ANALYSIS_HIGH / DIRECT_COMPARISON + MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- 天井までの内部ゲーム数CARRY_OVER。
- 内部状態・天井モード等の進行状態CARRY_OVER。
- 朝一表示自体はリセットされるため、表示だけで設定変更/据え置きを判別できない。
confidence: ANALYSIS_HIGH / DIRECT_COMPARISON

### powerCycleBehavior
- 純電源OFF→ONでは天井までの内部ゲーム数CARRY_OVER。
- 天井モード、エクスドライブモード、ギアフラグモード、CZ抽選テーブル、内部状態はCARRY_OVER。
- 液晶ゲーム数は0G表示だが内部ゲーム数は引き継ぐ。
- 抜剣メーター表示はリセットされるが内部的には引き継ぐ。
- 通常時の表示開始ステージはリディアン音楽院またはフードパークへ1:1。通常時以外の状況なら状態を引き継ぐとする直接比較資料あり。
- 抜剣「状態」そのものの純電断時契約は主要直接比較資料でも調査中のため `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CONFIRMED_ITEMS / UNVERIFIED_FOR_BAKKEN_STATE

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER（液晶表示は0Gへ戻る）。
confidence: ANALYSIS_HIGH / DIRECT_COMPARISON

### ceilingAfterReset
- 通常最大天井: 777G+α。
- 設定変更後: 最大498G+αへ短縮。
- 天国モード滞在時: 100G以内。
- 設定変更後の天井短縮は朝一1回目のATまで有効として扱う解析資料系統あり。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更: 天井モード、エクスドライブモード、ギアフラグモード、CZモード/抽選テーブルを再抽選。
- 据え置き / 純電源OFF→ON: CARRY_OVER。
- 設定変更は有利区間移行を伴い、天井モードの天国移行が優遇される。
- 有利区間移行時の設定1振り分け: 通常38% / 天国準備34% / 天国28%。
- 設定6は天国移行率が設定1の約2倍とする解析説明があるが、固定値56%としての公式/複数直接表は確認できないためDBでは方向性のみ保持し、設定2/4/5/6の完全振り分けは `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- CZモード天国移行率は設定変更時12%。天国なら250G以内にCZ「AXZバトル」へ突入。
confidence: ANALYSIS_HIGH_FOR_SETTING1_AND_CZ_12 / UNVERIFIED_FOR_FULL_HIGH_SETTING_DISTRIBUTION

### stateAfterReset
- 設定変更: 内部状態再抽選。
- 据え置き / 純電源OFF→ON: CARRY_OVER。
- ギアフラグモード等の個別初期振り分けは設定変更時に再抽選されるが、全モード固定率の公開表は確認できず推測補完しない。
confidence: ANALYSIS_HIGH_FOR_BASIC_CONTRACT / UNVERIFIED_FOR_DETAILED_DISTRIBUTION

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き / 純電源OFF→ON: CARRY_OVER。
- 通常営業中は上位AT「AXZラッシュ黄金」終了時、エンディング終了後にも有利区間RESET。
- 設定変更時を除く有利区間RESET後は（黄金）絶唱バトルへ突入し、CZモード天国へ移行するが、これは設定変更時恩恵ではないため分離して保持。
- 有利区間ランプでは設定変更/据え置きを判別できない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetBenefits
- 最大天井が777G+α→498G+αへ短縮。
- 天井モードの天国移行率が優遇。設定1の有利区間移行時は天国28%。
- CZモードは12%で天国へ移行し、選択時は250G以内にCZ突入。
- 設定変更後57Gまたは59Gでビーチステージへ移行すると天国準備/天国期待度アップ（58G移行はデフォルト）。これは朝一のモード推測材料。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更では前日の天井進行、内部状態、各種モード、抜剣メーター内部進行を引き継がないため、前日までの有利な進行は失われる。
- 通常の上位AT終了/エンディング後の有利区間リセットで得られる「（黄金）絶唱バトル + CZモード天国」は設定変更時には付与されない。
- 比較可能な固定損失率/期待値低下率は公開固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_CONTRACT / UNVERIFIED_FOR_FIXED_PENALTY_VALUE

### resetDetection
- 朝一は設定変更/据え置きとも液晶・メニュー表示がリセットされ、開始ステージもリディアン音楽院/フードパークの1:1となるため、見た目だけでは判別不可。
- 朝一498G+αを超えてAT非当選なら据え置き濃厚材料。
- CZ前兆が通常の150/250/350/450/550G前後からズレて発生し、前日ゲーム数との合算で規定ゾーンと整合する場合は据え置き濃厚材料。
- 有利区間ランプ判別不可。
- 本機固有のリールガックン条件/発生率は `Lパチスロ戦姫絶唱シンフォギア 正義の歌 / L戦姫絶唱シンフォギア 正義の歌jA / SANKYO / ジェイビー / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン` へ検索語を変え、主要解析・業界・旧DB系まで再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_DISPLAY_AND_ZONE_BEHAVIOR / UNVERIFIED_FOR_GAKKUN

### numericResetData
- 通常最大天井: 777G+α
- 設定変更後最大天井: 498G+α
- 天国モード天井: 100G以内
- 有利区間移行時・天井モード振り分け（設定1）: 通常38% / 天国準備34% / 天国28%
- CZモード天国移行率（設定変更時）: 12%
- 設定変更後開始ステージ: リディアン音楽院50% / フードパーク50%
- 特殊ステージチェンジ: 57G/59Gビーチ移行で天国準備以上期待度アップ、58Gはデフォルト
- 設定2/4/5/6の有利区間移行時モード完全振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- ギアフラグモード初期振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## conflicts
- 50枚ベースは主要解析・HAZUSE系で約32G/50枚、後年整理サイトに約31.7Gの表記がある。丸め/算定差の可能性が高いためcanonicalは約32G、31.7Gは補足値として保持し平均化しない。
- 設定6の天国移行率について「設定1の約2倍」とするなな徹説明と「約56%」とする後年整理がある。前者は方向性を示すが固定率の一次/主要表が確認できないため、56%をcanonical固定値には採用しない。

## missingFields
- 設定2/4/5/6の有利区間移行時・天井モード完全振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 設定変更時ギアフラグモードの完全初期振り分け: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 純電源OFF→ON時の抜剣状態そのもの: UNVERIFIED_AFTER_RESEARCH
- 本機固有リールガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 固定的なリセット損失率/期待値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-14

### 公式 / 業界・型式
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/962/
- HAZUSE: https://hazuse.com/machine/pachislot/3S1917/
- グリーンべると 検定通過: https://web-greenbelt.jp/post-81369/
- P-WORLD / グリーンべると 検定通過: https://news.p-world.co.jp/articles/27187/greenbelt
- 遊技通信 発表記事: https://news.p-world.co.jp/articles/27619/yugitsushin
- 遊技日本 発表記事: https://news.p-world.co.jp/articles/27665
- グリーンべると 導入前記事: https://news.p-world.co.jp/articles/28149/greenbelt

### 性能コア
- パチ&スロ必勝本 基本スペック: https://hisshobon.com/machineinfo/83885/
- パチ&スロ必勝本 機種解説: https://p.hisshobon.jp/vpage/2624/2
- HAZUSE: https://hazuse.com/machine/pachislot/3S1917/
- P-WORLD: https://www.p-world.co.jp/machine/database/10050
- K-Navi: https://p-kn.com/slot/4151/
- グリーンべると: https://news.p-world.co.jp/articles/28149/greenbelt

### resetBehavior
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/760/22576/
- なな徹 天井: https://nana-press.com/kaiseki/machine/760/22574/
- なな徹 モード: https://nana-press.com/kaiseki/machine/760/22580/
- なな徹 有利区間: https://nana-press.com/kaiseki/machine/760/22577/
- パチ&スロ必勝本 天井&設定変更: https://hisshobon.com/machineinfo/83867/
- パチ&スロ必勝本 通常時解説: https://p.hisshobon.jp/machine/4315/1/103977
- P-WORLD 天井解析: https://www.p-world.co.jp/machine/database/10050
- ぽこすろっと（リセット判別補助）: https://www.nankaikoya.jp/symphogear-seiginouta-kitaichi/

## sourceQualityNotes
- 型式/検定は業界検定通過記事 + HAZUSEで照合。
- 性能コアは業界記事、必勝本、HAZUSE、P-WORLD、K-Naviの複数一致を優先。
- resetBehaviorはなな徹と必勝本の直接比較表を主軸にし、後年整理サイトは不足項目の再探索/補助照合に限定。
- 設定6天国約56%は「設定1の約2倍」という主要解析説明から数学的に固定せず、明示表がないため未確定扱い。
