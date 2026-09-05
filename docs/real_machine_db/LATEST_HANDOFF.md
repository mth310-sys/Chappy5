# 実機DB 最新リレー引継ぎ

更新日: 2026-09-05

## 現在地点

- recordCount: **649**
- latestMachineAdded: **パチスロ クイーンズブレイド 流浪の戦士**（JPS）
- latestRecord: `docs/real_machine_db/machines/2012-04-16_queens-blade-rurou-no-senshi.md`
- chronologicalFrontier: **2012-04-16**
- frontierLatestExactDateMachine: **パチスロ クイーンズブレイド 流浪の戦士**
- schema: **resetBehavior v0.7**
- status: **2012-04-16_GROUP_OPEN__CONTINUE_SAME_DAY_AUDIT**

## 今回の同期・時系列監査

- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前レコードを確認して開始。
- INDEXは旧地点19件のままなので、README規定どおりLATEST_HANDOFFを進捗正本として使用。
- 開始時はrecordCount 648 / frontier 2012-04-02 / フルメタル・パニック！TSR。
- 04/02同日群を再監査。当時DK-SIS 2012年4月カレンダーは4/2パチスロとしてニューアイムジャグラーEXを掲載、HAZUSEはモンスターハンターを4/2導入と掲載。両機は既登録。K-Navi由来で既登録のフルメタル・パニック！TSR以外に、新たな具体日付き04/02未登録5号機を確定できなかったため04/02群を閉鎖。
- 04/09は複数日付検索で具体日付き新規5号機を確定できず、次の具体日付き群2012-04-16へ前進。
- 04/16候補を横断し、JPS「パチスロ クイーンズブレイド 流浪の戦士」をrepo想定path直接fetchで未登録確認して649件目に追加。
- 04/16同日群には少なくとも「一騎当千3 Valiant Venus」「パチスロ マクロスフロンティア はじまりの歌、銀河に響け！」が存在するため、同日群は閉じない。

## 今回の本線追加 — パチスロ クイーンズブレイド 流浪の戦士

### 導入日・型式

- 時系列キー: **2012-04-16**。
- K-Navi、パチビー、HAZUSE、当時系新機種一覧で2012-04-16を照合。
- formalModelName: **クイーンズブレイドR2**。
- approvalNumber: **2S0037**。
- manufacturerはJPS（株式会社ジェイピーエス）を採用。HAZUSE日本語ページの「ジェイビーエス」は同一型式ページ内の表示誤り候補としてレコード内conflict注記のみ残した。

### 性能コア

- systemType: **5号機 ボーナス+無限RT / SRT（ストックリプレイタイム）**。
- 機械割: **97.46 / 99.06 / 100.61 / 103.32 / 105.91 / 110.73%**。
- BIG: **1/329.3 / 319.7 / 310.6 / 302.0 / 293.9 / 283.7**。
- REG: **1/508.0 / 461.5 / 422.8 / 390.1 / 362.1 / 334.4**。
- 合算: **1/199.8 / 188.9 / 179.1 / 170.2 / 162.2 / 153.5**。
- 50枚ベース: **34.6〜36.2G/50枚**（パチマガスロマガの1000円あたりレンジ）。
- BIG最大 **311枚**、REG最大 **103枚**。
- 無限RT「ガイノスモード」: **次回ボーナスまで / 約+0.6枚/G**。
- 救済はゲーム数ではなくチャンス目回数型。BIG後 **1〜12回**、REG後 **1〜9回**の規定チャンス目成立でRTへ。
- 「天井あり」（チャンス目回数型救済）と「天井なし」（ゲーム数天井なし）の資料差は数値競合ではなく `DEFINITION_DIFFERENCE` として保持。

### resetBehavior v0.7

- **設定変更時にチャンス目規定回数を再セット**することを本機固有資料で確認。
- 当時系天井資料では、再セット値が変更前より多くなる場合は書き換えないとされ、変更によって救済到達が不利方向へ遠ざからない処理を確認。
- 別解析資料では**設定変更時は規定回数1回が選択されやすい**。具体割合は再探索後も確定できないため率はUNVERIFIED。
- **設定変更後はRT状態からスタート**し、朝一にチャンス目成立前の転落リプレイ「ベル・リプレイ・リプレイ」入賞が設定変更推測材料になるとの機種固有解析あり。確定判別ではなく「可能性が高い」として保存。
- 当時系資料は**宵越し〇**。設定変更時の不利方向書換えなし記述と合わせてcarryOverBehaviorへ保存。
- 単純電源OFF→ONのみの規定回数/RT状態処理は本機固有直接資料を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- gameCounterResetは通常ゲーム数天井がないため `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`。チャンス目規定回数の処理は別項目で保持。
- 有利区間は `NOT_APPLICABLE_5TH_GEN`。

## 時系列監査 / 次回再開地点

1. **recordCount 649 / chronologicalFrontier 2012-04-16**から開始。
2. **2012-04-16同日群を継続監査**する。
3. 最優先候補: **一騎当千3 Valiant Venus**（タイヨー）。K-Naviで2012-04-16導入を確認済み。必ずrepo重複確認後、未登録なら650件目候補。
4. 同日候補: **パチスロ マクロスフロンティア はじまりの歌、銀河に響け！**（SANKYO）。K-NaviとDK-SISで2012-04-16を確認済み。
5. **ねぇ～ねぇ～島娘**はDK-SISで4/16導入開始扱い、前handoff確認のK-Naviでは4/23表記があるため、到達時は具体日CONFLICT/日付定義差を再確認し、最古具体日で漏れ防止しつつ両根拠を保持する。
6. 04/16群を閉じるまでは次日へ飛ばさない。
7. PARTIAL/UNVERIFIEDは表記揺れ・型式名・メーカー名と設定変更/リセット/朝一/据え置き/宵越し/電源OFF ON/天井/モード/状態/ガックンを組み替えて再探索し、競合は平均せずCONFLICT。

## 遡及resetBehavior QA 次回再開地点

- 既存遡及QA到達地点 **ドカベンDまで補完済み**を維持。
- 次候補 `docs/real_machine_db/machines/2006-12_linda-no-neraiuchi.md`。
- 既にresetBehavior節があれば飛ばし、次の実在欠損へ進む。
- 既存性能コアやCONFLICTを無駄に再調査・改変しない。

## 主要出典 — 取得日 2026-09-05

- DK-SIS白書2012 4月カレンダー: `https://www.daikoku.co.jp/wp-content/uploads/siswp/2012/dkwp/files/siswp/2012/HTML/index139.html`
- K-Navi クイーンズブレイド: `https://p-kn.com/slot/1605/`
- パチビー クイーンズブレイド: `https://www.pachibee.jp/machines/index/212020008`
- HAZUSE クイーンズブレイド: `https://hazuse.com/machine/pachislot/2S0037/`
- パチマガスロマガ スペック: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/26/a.php`
- パチマガスロマガ 小役/1000円ベース: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jps_slot/26/c.php`
- パチスロ解析ガイド クイーンズブレイド: `https://www.pachislot-guide.net/2012/queens-blade/`
- 天井ハイエナ生活 2012-05-31更新: `https://macerate.seesaa.net/article/272914282.html`
- 当時系新機種一覧: `https://macerate.seesaa.net/article/263152916.html`
- K-Navi 一騎当千3 Valiant Venus: `https://p-kn.com/slot/1603/`
- K-Navi マクロスフロンティア: `https://p-kn.com/slot/1610/`

## GitHub commits

- クイーンズブレイド machine record: `33cb5af7e27444ffd421fa046c31dc9711ec8ff7`
