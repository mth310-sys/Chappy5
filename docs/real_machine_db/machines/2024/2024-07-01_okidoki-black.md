# 沖ドキ！BLACK

recordNo: 1656
machineName: 沖ドキ！BLACK
aliases: 沖ドキBLACK / 沖ドキブラック / S沖ドキ！BLACK
manufacturer: ミズホ
formalModel: S／沖ドキ！BLACK／EP
inspectionCode: 4S0253
releaseDate: 2024-07-01
generation: 6.5号機 / メダル機 / 30Φ
systemType: AT / 疑似ボーナス・モード管理型沖スロ
settings: 1 / 2 / 3 / 5 / 6
coreStatus: COMPLETE_CORE

## releaseDateEvidence
- ユニバーサル公式は2024年7月発売。
- HAZUSE・1geki・パチマガスロマガ・2024年新台カレンダーが2024-07-01導入開始で一致するため、全国導入本線を2024-07-01に固定。
- 一部店舗・地域では7月上旬後半の新台入替事例があるが、全国本線の導入日とは分離する。
confidence: OFFICIAL + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modelEvidence
- HAZUSEで型式 `S／沖ドキ！BLACK／EP`、検定番号 `4S0253`、メーカー ミズホを確認。
- ユニバーサル公式製品ページでメーカー ミズホ、AT、2024年7月発売を確認。
confidence: OFFICIAL + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## corePerformance
payoutRateBySetting:
- setting1: 97.2%
- setting2: 98.7%
- setting3: 101.9%
- setting5: 104.8%
- setting6: 108.6%
initialHitBySetting:
- bonusInitial:
  - setting1: 1/288.7
  - setting2: 1/277.9
  - setting3: 1/265.8
  - setting5: 1/254.1
  - setting6: 1/243.1
- big:
  - setting1: 1/214.1
  - setting2: 1/205.6
  - setting3: 1/188.5
  - setting5: 1/173.3
  - setting6: 1/160.8
- reg:
  - setting1: 1/292.5
  - setting2: 1/283.8
  - setting3: 1/267.0
  - setting5: 1/251.7
  - setting6: 1/239.0
baseGamesPer50: 約32G/50枚
netIncrease:
- BIG / REG: 約3.5枚/G
basicPayout:
- BIG: 60G / 約210枚
- REG: 25G / 約90枚
- 天国モード期待獲得: 約1310枚（比較補助値）
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は10種類の内部モードで規定G数・ボーナス当選率・次回モード移行を管理する沖ドキ系AT。
- 通常A / 通常Bの基本天井は999G、引き戻し / チャンスは200G、天国以上は32G。
- 設定変更時は通常A / 通常B / チャンスのいずれかへ再抽選される。
- 通常の有利区間リセット時には黒ドキモード移行抽選が存在するが、なな徹は「設定変更時を除く」と明記するため、朝一設定変更恩恵とは分離する。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCHED_WITH_GAKKUN_AND_DISPLAY_DETECTION_UNVERIFIED
resetQaLastUpdated: 2026-09-14

### settingChangeBehavior
- 有利区間RESET。
- 天井までの内部ゲーム数RESET。
- 内部モードを再抽選。
- 設定変更後は通常A 50.0% / 通常B 10.2% / チャンス39.8%へ振り分け。
- 通常A / 通常Bへ移行した場合は25.0%で最大天井を399Gへ短縮。
- チャンスモードなら天井200G。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- 天井ゲーム数CARRY_OVER。
- 内部モードCARRY_OVER。
- なな徹の設定変更/据え置き比較表で3項目を直接確認。
confidence: ANALYSIS_HIGH / DIRECT_COMPARISON

### powerCycleBehavior
- 純電源OFF→ONでは天井までのゲーム数CARRY_OVER。
- 内部モードCARRY_OVER。
- 必勝本の機種別「設定変更&電源OFF/ON」比較表で直接確認。
- 純電源OFF→ON単独時の有利区間そのものを機種固有に明記した直接資料は今回固定できず、据え置き契約から推測補完しない。
confidence: ANALYSIS_HIGH_FOR_GAME_COUNTER_AND_MODE / UNVERIFIED_FOR_ADVANTAGEOUS_SECTION

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 表示上のゲーム数リセット挙動やデータカウンタ対策可否を固定する直接資料は再探索後も確認できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_INTERNAL_COUNTER / UNVERIFIED_FOR_DISPLAY_COUNTER

### ceilingAfterReset
- 通常A / 通常B: 基本999G。
- 引き戻し / チャンス: 200G。
- 天国 / ドキドキ / 超ドキドキ等: 32G。
- 設定変更後、通常A / 通常B選択時の25.0%で最大399Gへ短縮。
- 設定変更後チャンスモード選択率39.8%のため、その場合は200G天井。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### modeAfterReset
- 設定変更時: 再抽選。
- 振り分けは通常A 50.0% / 通常B 10.2% / チャンス39.8%。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 設定変更時以外の有利区間リセットでは黒ドキモード移行の可能性があるが、設定変更時は除外されるため朝一契約へ混入しない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### stateAfterReset
- 本機の朝一客行動へ必要な主要内部管理はモード・天井として公開されている。
- モードとは別軸の「内部状態」を設定変更/据え置き/電断で比較する固定公開契約は、表記揺れ・型式・メーカー・シリーズ名と検索語を変えて再探索したが確認できず `NOT_SEPARATELY_PUBLISHED_AFTER_RESEARCH`。
confidence: UNVERIFIED_FOR_SEPARATE_STATE_AXIS

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き時: CARRY_OVER。
- なな徹の機種別朝一比較表で直接確認。
- 純電源OFF→ONのみの場合: 機種固有の直接明記を再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_STATIONARY / UNVERIFIED_FOR_POWER_CYCLE

### resetBenefits
- 設定変更時の39.8%でチャンスモードへ移行し、天井200G。
- 通常A / 通常B選択時も25.0%で天井399Gへ短縮。
- 設定変更後は通常A 50.0%、通常B 10.2%、チャンス39.8%という専用振り分けを持つ。
- 通常稼働中の有利区間リセット時に一部で黒ドキモードへ移行する恩恵は「設定変更時を除く」ため、朝一リセット恩恵としては扱わない。
confidence: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

### resetPenalties
- 設定変更により前日の内部モード・天井進行を失う。
- 前日が通常Bなど有利なモードであった場合は据え置きより不利になり得る一方、約40%のチャンスモード振り分けと短縮天井抽選があるため、一律の朝一不利とは扱わない。
- 固定的なリセット損失率/期待値は公開固定値を確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_RESET_CONTRACT / UNVERIFIED_FOR_FIXED_PENALTY_VALUE

### resetDetection
- なな徹のリセット判別は「現在調査中」。見た目だけで確実に判別できる固定方法は確認できない。
- 朝一200G以内の当選や399G付近までの当選は設定変更期待を上げる材料だが、通常時にも同じモード・当選経路が存在するため単独で確定判別には使えない。
- 本機固有のリールガックン条件/発生率は、機種名・型式・沖ドキBLACK/ブラック・ミズホ・設定変更/リセット/朝一/据え置き/電源OFF ON/ガックン等へ検索語を変え、公式・主要解析・旧DB系を横断したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間ランプ/表示による確定判別についても本機固有の固定公開仕様を確認できず `UNVERIFIED_AFTER_RESEARCH`。
confidence: ANALYSIS_HIGH_FOR_NO_CONFIRMED_SIMPLE_DETECTION / UNVERIFIED_FOR_GAKKUN_AND_DISPLAY

### numericResetData
- 設定変更時モード振り分け:
  - 通常A: 50.0%
  - 通常B: 10.2%
  - チャンス: 39.8%
- 通常A/B選択時の399G天井短縮当選率: 25.0%
- チャンスモード天井: 200G
- 通常A/B基本天井: 999G
- 設定変更後に「200G天井となる確率」: 39.8%（チャンスモード選択率として公開）
- 設定変更後に通常A/B選択かつ399G短縮となる条件付き率: 25.0%
- 全リセット台に対する399G短縮の単純積算値は公開一次値ではないためDB正本には算出値として固定しない。

## conflicts
- 設定構成は `1 / 2 / 3 / 5 / 6` の5段階（設定4なし）。一部二次カレンダーに機械割行を「設定4 101.9%」とする表記があるが、HAZUSE・1geki等の機種別解析は設定3 101.9%で一致するため、前者を転記誤りとしてcanonicalへ採用しない。
- 地域・店舗単位では7月8日以降の新台入替事例も確認できるが、公式発売月・主要機種DB・全国新台カレンダーは7月1日導入で一致。全国本線を2024-07-01とし、地域差をreleaseDateEvidenceで分離。

## missingFields
- 純電源OFF→ON単独時の有利区間契約: UNVERIFIED_AFTER_RESEARCH
- モードと別軸の内部状態の設定変更/据え置き/電断比較: NOT_SEPARATELY_PUBLISHED_AFTER_RESEARCH
- 本機固有リールガックン条件/発生率: UNVERIFIED_AFTER_RESEARCH
- 有利区間ランプ/表示による確定変更判別: UNVERIFIED_AFTER_RESEARCH
- 固定的なリセット損失率/期待値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH

## sources
取得日: 2026-09-14

### official / industry
- ユニバーサル公式 沖ドキ！BLACK: https://www.universal-777.com/product/slot/okidoki_black/

### core / model
- HAZUSE 沖ドキ！BLACK: https://hazuse.com/machine/pachislot/4S0253/
- 1geki 沖ドキ！BLACK 機種トップ: https://1geki.jp/slot/s_oki_doki_black/
- パチマガスロマガ 沖ドキ！BLACK: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/across_slot/21/kh01.php

### reset / morning
- パチ＆スロ必勝本 天井&設定変更: https://p.hisshobon.jp/machine/4317/1/102601
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/778/22174/
- なな徹 狙い目: https://nana-press.com/kaiseki/machine/778/22647/
- なな徹 モード: https://nana-press.com/kaiseki/machine/778/22176/
- 1geki 天井・朝一: https://1geki.jp/slot/s_oki_doki_black/3/
- 1geki モード: https://1geki.jp/slot/s_oki_doki_black/42/
- 1geki 規定ゲーム数短縮: https://1geki.jp/slot/s_oki_doki_black/45/

### boundary audit
- 1geki 2024年7月新台カレンダー: https://1geki.jp/newmachinecalender/202407/
- 2024年新機種カレンダー補助: https://ps-mania.jp/sindai-calendar/2024/
