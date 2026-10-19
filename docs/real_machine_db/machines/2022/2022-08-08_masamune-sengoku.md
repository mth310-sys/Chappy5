# 政宗 戦極

recordNo: 1512
machineName: 政宗 戦極
manufacturer: 大都技研
formalModel: S政宗 戦極A5
inspectionCode: 2S0357
releaseDate: 2022-08-08
generation: 6.5号機
systemType: AT / ゲーム数上乗せ型AT

## payoutRateBySetting
- 設定1: 97.7%
- 設定2: 98.9%
- 設定4: 103.1%
- 設定5: 105.1%
- 設定6: 107.0%
- 設定L: 公開確定値未確認（デモ画面中の下パネル消灯で判別可能とする解析あり）

信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH

## initialHitBySetting
### CZ「一騎駆けチャレンジ」
- 設定1: 1/156.7
- 設定2: 1/146.1
- 設定4: 1/120.0
- 設定5: 1/102.3
- 設定6: 1/91.3

### AT「隻眼ノ乱」
- 設定別AT初当り確率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`
- 通常時の主要公開初当り指標はCZ「一騎駆けチャレンジ」確率。AT確率は複数資料で非掲載/調査中のため推測しない。

信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH

## baseGamesPer50
- 約34G/50枚

信頼度: INDUSTRY_HIGH

## netIncrease
- AT「隻眼ノ乱」: 約+2.4枚/G

信頼度: INDUSTRY_HIGH

## basicPayout
- AT「隻眼ノ乱」: ゲーム数管理型。AT初当り時は必ず上乗せ特化ゾーン「秀吉決戦」から開始し、そこで獲得した上乗せG数が初期G数となるため固定の基本セットG数はない。
- 「秀吉決戦」: 青7揃いごとに30〜300G上乗せ。通常の最大継続率は仲間参戦込み約83%。
- AT終了時は15Gの「戦極」へ必ず移行し、AT引き戻し期待度は約50%。
- 「極秀吉決戦」は別格上位要素だが、実機完全再現用の詳細内部抽選は収集対象外。

信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH

## modeSpecificMinimumData
- CZ「一騎駆けチャレンジ」: 通常時の主要CZ。成功で主に「戦極」へ。
- 「戦極」: 15G、AT期待度約50%。AT終了時にも必ず突入。
- CZ間ゲーム数天井: 500Gで「一騎駆けチャレンジ」、シナリオ5以上濃厚。
- CZスルー天井: 最大6回失敗後、7回目CZ成功→「戦極」以上濃厚。
- 戦極スルー天井: 最大3回失敗後、4回目「戦極」はAT当選濃厚（AT終了時の戦極は回数対象外）。
- AT間天井: 有利区間移行後の通常時最大2000G+αで「超一騎駆けチャレンジ」。500G/1000G選択時は決戦ポイントMAX→次回一騎駆けチャレンジが超一騎へ。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_DIRECT_RESET_NUMBERS
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井RESET。
- 内部状態RESET。
- 兵力RESET後、初期兵力を再抽選。
- 決戦ポイントRESET後、初期決戦ポイントを再抽選。
- 一騎駆けチャレンジの内部テーブルを再抽選。設定差あり。

### carryOverBehavior
- 据え置き時は有利区間・天井・内部状態をCARRY_OVER。
- 兵力・決戦ポイントも内部的にCARRY_OVER。
- 朝一の表示は内部値をそのまま見せないため、表示状態と内部進行を分離して扱う。

### powerCycleBehavior
- 純電源OFF→ONでは有利区間・天井・内部モード/テーブル進行をCARRY_OVERとする解析を確認。
- 兵力・決戦ポイント等の内部値も据え置きとして引き継ぐ一方、朝一表示はマスク/初期表示になるため内部値と表示値を混同しない。

### gameCounterReset
- 設定変更時: RESET。
- 据え置き/純電源OFF→ON: 天井ゲーム数CARRY_OVER。

### ceilingAfterReset
- 通常のAT間天井は最大2000G+α。
- 設定変更時はAT間500Gまたは1000G側が合算50%、2000Gが50%とする解析が一致。
- 500Gと1000Gの個別振り分けは公開値を固定できないため推測しない。
- CZ間500G、CZ最大6スルー後の7回目成功、戦極最大3スルー後の4回目AT濃厚は通常の救済仕様として保持。

### modeAfterReset
- 設定変更時は一騎駆けチャレンジ用テーブルを再抽選。
- 設定変更時・AT終了後の戦極失敗時は高設定ほどパターンC以上の選択率が高い。
- 公開合算値（C以上）: 設定1 29.7% / 設定2 35.94% / 設定4 42.2% / 設定5 52.36% / 設定6 62.50%。
- 27テーブル全振り分けは実機完全再現寄りの詳細のため本レコードには転記しない。

### stateAfterReset
- 設定変更時の内部状態はRESET。
- 据え置き/純電断はCARRY_OVER。
- 設定変更直後の通常/高確/超高確の個別初期振り分けは、機種名・型式・設定変更・朝一・初期状態等で再探索したが `UNVERIFIED_AFTER_RESEARCH`。
- CZ/戦極終了後の状態振り分けは公開されているが、設定変更直後の値ではないため流用しない。

### advantageousSectionReset
- 設定変更時: RESET。
- 据え置き/純電源OFF→ON: CARRY_OVER。
- 有利区間ランプは非搭載とする解析が一致し、朝一ランプによる変更判別は不可。

### resetBenefits
- 設定変更時はAT間500G/1000G側の合算選択率が50%。最大2000G固定より浅い救済が選ばれる可能性がある。
- 初期兵力・初期決戦ポイントを再抽選。
- 一騎駆けチャレンジのテーブルを再抽選し、高設定ほどC以上が選ばれやすい。

### resetPenalties
- 設定変更固有の主要な不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 有利区間ランプ非搭載のためランプ判別不可。
- 朝一の兵力カウンターは設定変更/据え置きとも内部ptに関係なく白系/非表示状態となり、見た目だけでは即判別しにくい。
- 据え置きでは兵力を内部的に引き継ぐため、前日の残り兵力を把握できていれば100pt到達タイミングから据え置きを推測可能。
- 初回テーブルは設定変更時に再抽選されるが、単発観測だけで確定判別する用途には弱い。
- 本機固有のリールガックン条件/発生率は検索語・資料系統を変えて再探索したが `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更時AT間天井: 500G or 1000G 合算50% / 2000G 50%。
- 設定変更時・AT終了後の戦極失敗時 一騎駆けテーブルC以上合算:
  - 設定1: 29.7%
  - 設定2: 35.94%
  - 設定4: 42.2%
  - 設定5: 52.36%
  - 設定6: 62.50%
- CZ間天井: 500G。
- CZスルー: 最大6回→7回目成功濃厚。
- 戦極スルー: 最大3回→4回目AT濃厚（AT終了時分を除く）。
- AT間: 最大2000G+α。

### publicMorningNumbers
- 設定変更時AT間天井: 500G or 1000G 合算50% / 2000G 50%。
- 設定変更時テーブルC以上: 設定1 29.7% / 設定2 35.94% / 設定4 42.2% / 設定5 52.36% / 設定6 62.50%。
- 初期兵力・初期決戦ポイントは再抽選されるが、個別の初期ポイント振り分けは今回の物差し用途で固定できる高信頼の簡潔値を確認できず、推測しない。

### resetBehavior 再探索メモ
- 検索語: `政宗 戦極 / 政宗戦極 / S政宗 戦極A5 / 2S0357 / 大都技研 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / AT間 / モード / テーブル / 内部状態 / 兵力 / 決戦ポイント / ガックン / 有利区間`。
- 業界記事、HAZUSE、なな徹、1geki、パチセブン、当時解析/後年整理資料を横断。
- 設定変更時500G/1000Gの個別比率、設定変更直後の内部状態個別振り分け、固有ガックンは十分な再探索後も固定せずUNVERIFIED扱い。
- AT設定別初当り確率は複数資料で公表値を確認できず、CZ確率を主要初当り指標として保存。

## sources
取得日: 2026-09-13

1. 遊技日本 / P-WORLD — 導入・型式・基本スペック
   - https://yugi-nippon.com/pachinko-new-machine/post-53141/
   - https://news.p-world.co.jp/articles/20957/nippon
   - 2022-08-08導入、型式S政宗 戦極A5、6.5号機、CZ/出玉率、ゲームフロー
   - reliability: INDUSTRY_HIGH
2. Greenbelt / P-WORLD — 基本性能
   - https://news.p-world.co.jp/articles/20965
   - AT純増約2.4枚/G、50枚ベース約34G、設定構成、秀吉決戦30〜300G、戦極引戻し約50%
   - reliability: INDUSTRY_HIGH
3. HAZUSE — 検定番号・設定別スペック・天井
   - https://hazuse.com/machine/pachislot/2S0357/
   - https://hazuse.com/machine/pachislot/2S0357/genre/207/
   - 型式S政宗 戦極A5、検定番号2S0357、設定別CZ/出玉率、各天井
   - reliability: ANALYSIS_HIGH
4. なな徹 — 朝一/設定変更
   - https://nana-press.com/kaiseki/machine/391/11454/
   - 設定変更/据え置き比較、有利区間/天井/内部状態/兵力/決戦pt、朝一表示、初期抽選
   - reliability: ANALYSIS_HIGH
5. スロパチクエスト — 電源OFF→ON/リセット天井
   - https://www.slopachi-quest.com/article/masamune-sengoku-tenjou/
   - 設定変更 vs 電源OFF ON、有利区間/天井/内部モード、設定変更時500G or 1000G合算50%、有利区間ランプ非搭載
   - reliability: ANALYSIS_HIGH
6. 1geki — 設定変更時テーブル
   - https://1geki.jp/slot/s_masamune_sngk/47/
   - 設定変更時/AT終了後戦極失敗時のテーブル振り分け、高設定ほどC以上優遇
   - reliability: ANALYSIS_HIGH
7. パチセブン — テーブル合算値
   - https://pachiseven.jp/machines/6579/cutout/4
   - 設定変更時C以上合算 29.7/35.94/42.2/52.36/62.50%
   - reliability: ANALYSIS_HIGH
8. なな徹 — 通常時状態抽選
   - https://nana-press.com/kaiseki/machine/391/10614/
   - CZ/戦極終了後の状態振り分け。設定変更直後とは別定義のため転用しない確認用
   - reliability: ANALYSIS_HIGH
9. HAZUSE — AT/CZ基本構造
   - https://hazuse.com/machine/pachislot/2S0357/genre/203/
   - AT初回秀吉決戦、AT純増、戦極15G等
   - reliability: ANALYSIS_HIGH

## missingFields
- 設定別AT「隻眼ノ乱」初当り確率（公開値を固定できず。主要公開初当りはCZ確率）
- 設定変更時500G/1000Gの個別振り分け（合算50%までは確認）
- 設定変更直後の通常/高確/超高確の個別初期振り分け
- 本機固有のリールガックン条件/発生率
- 設定Lの確定機械割/CZ確率

## conflicts
- 設定5のCZ確率を1/102.0とする一部二次資料があるが、HAZUSE・1geki等の詳細表は1/102.3で一致し、1/102.3をcanonicalとした。
- 設定6出玉率を107.7%とする一部二次資料があるが、業界一次系・HAZUSE・1geki等で107.0%が一致。107.0%をcanonicalとし、異系統の107.7%はSECONDARY_CONFLICTとして保持。

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_WITH_DIRECT_RESET_NUMBERS
confidence: INDUSTRY_HIGH_CORE / HIGH_RESET
