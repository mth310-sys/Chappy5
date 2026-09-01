# 実機DB 最新リレー引継ぎ

更新日: 2026-09-02

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前正本は **307 `パチスロクローズ武装戦線`（トリビー / 2008-10-27）**。
- 2008年10月境界を再監査し、ALL7.jpの2008年10月導入一覧とrepo既存レコードを照合。
- 既存302 `アカギ～永続の闘牌～` と同じ2008-10-14に、未登録のパチスロ **308 `ナゴスロ金鯱だがね`（ニューギン）** が残っていることを確認し、遡及漏れ補完として追加。
- 性能コア + ミッションv0.7 `resetBehavior` を同時収集。単一回顧資料しか取れない値は高信頼へ昇格させず、欠損は検索語・資料系統変更後のみ `UNVERIFIED_AFTER_RESEARCH` とした。

## 308. ナゴスロ金鯱だがね

- record: `docs/real_machine_db/machines/2008-10-14_nagoslo-kinshachi-dagane.md`
- manufacturer: ニューギン
- modelNumber: `ナゴスロキンシャチダガネ`（P-WORLD）
- releaseDate: **2008-10-14**。ALL7.jp導入予定一覧。2008-09-04 K-Navi内覧会記事の「10月中旬ホールデビュー予定」、P-WORLD/5号機クロニクルの2008年10月表記とも整合。
- generation: 5号機
- systemType: ボーナス + 救済RT / 一発告知。後年一覧分類ではA+RT。
- BIG: **1/321.3 / 1/303.4 / 1/290.0 / 1/278.9 / 1/268.6 / 1/259.0**。
- REG: **1/394.8 / 1/372.4 / 1/343.1 / 1/315.1 / 1/291.3 / 1/274.2**。
- 合算: **1/177.1 / 1/167.2 / 1/157.2 / 1/147.9 / 1/139.7 / 1/133.2**。設定6は当時K-Navi記事の約1/133と独立整合。
- 機械割: **96.6 / 99.2 / 101.7 / 104.2 / 106.7 / 109.3%**（5号機クロニクル。設定別別系列表を回収できず `ANALYSIS_SINGLE_RETROSPECTIVE`）。
- 50枚/1000円ベース: `UNVERIFIED_AFTER_RESEARCH`。機種名・型式・メーカーと「1000円/50枚/ベース/コイン持ち/ゲーム数」を組み替え、当時攻略、P-WORLD、旧DB、回顧資料を横断しても直接値を確定できず。
- BIGは**345枚超払い出し終了**、REGは**105枚超払い出し終了**（P-WORLD）。実獲得純増枚数へ勝手に換算していない。
- 救済RT: **ボーナス後758Gで突入**。当時K-Navi一次系記事で確認。
- RT純増: **約+0.2枚/G**（単一後年天井資料のみ。独立照合待ち）。
- `coreStatus: PARTIAL_CORE_BASE_GAMES_AND_ACTUAL_NET_PAYOUT_UNVERIFIED`。

### resetBehavior（308）

- `settingChangeBehavior`: **CEILING_COUNTER_CARRY_OVER_REPORTED_SINGLE_RETROSPECTIVE**。後年天井資料が本機を「宵越し〇」と掲載し、K-Naviの天井用語説明では「宵越し天井＝設定変更しても天井までのゲーム数がリセットされない」と定義。758G救済RTまでのボーナス間カウンタは設定変更でも引継ぎとの公開情報として保持。ただし本機個別の当時一次解析本文を回収できていないため高信頼扱いにはしない。
- `carryOverBehavior`: **CEILING_COUNTER_YOIKOSHI_REPORTED_SINGLE_RETROSPECTIVE**。前日ハマリを翌朝へ持ち越して狙える資料あり。RT内部状態などカウンタ以外は未確定。
- `powerCycleBehavior`: `UNVERIFIED_AFTER_RESEARCH`。電源OFF→ONのみの場合の本機固有カウンタ/RT状態/初期出目処理を直接確定できず。
- `gameCounterReset`: **NOT_RESET_ON_SETTING_CHANGE_REPORTED_SINGLE_RETROSPECTIVE**。
- `ceilingAfterReset`: 固定リセット短縮天井は確認なし。通常758Gまでの残Gを持ち越すとの単一回顧資料情報を保持。
- `modeAfterReset`: 通常時の複数モード/朝一専用モードを確認できず。
- `stateAfterReset`: 天井RT中等の設定変更時処理は `UNVERIFIED_AFTER_RESEARCH`。
- `advantageousSectionReset`: `NOT_APPLICABLE`（5号機・有利区間制度前）。
- `resetBenefits`: 前日天井進捗の持越しが朝一狙い要素になり得る。設定変更専用の追加恩恵ではない。
- `resetPenalties`: `NONE_CONFIRMED_AFTER_RESEARCH`。
- `resetDetection`: `UNVERIFIED_AFTER_RESEARCH`。ガックン、初期出目、ランプ、リール挙動等を検索したが本機固有の変更判別条件は未確定。ボーナス後32Gの金シャチ点灯/33G示唆は設定変更判別と混同しない。
- 公開朝一数値: 通常天井**758G**。設定変更専用モード振り分け、朝一当選率、追加恩恵率は確認なし。

## 308主要出典

取得日: 2026-09-02

- https://www.all7.jp/plans/index/2008/10
- https://p-kn.com/topics/exhibition/359/
- https://www.p-world.co.jp/machine/database/5313
- https://5goki.com/newgin-excite
- https://macerate.seesaa.net/article/226312027.html
- https://p-kn.com/slot/tenjo/
- https://pachisuro100.com/itiran/

## 境界監査・重複防止

- **既存308件の再追加禁止。**
- 302 `アカギ～永続の闘牌～` と308 `ナゴスロ金鯱だがね` は2008-10-14。
- 303 `天地を喰らう`、304 `まつり屋華恋` は2008-10-19/20前後資料で処理済み。
- 305 `バウンティキラー`、306 `豊漁` は2008-10-05の遡及漏れ補完。
- 307 `パチスロクローズ武装戦線` は2008-10-27。
- ALL7.jpの10月一覧はパチンコ機を混在表示する。「GU-GUガンモ」「ジャックラッシュ」「我 藤岡弘、柳生十兵衛見参」等は名称だけで本パチスロDBへ追加しない。
- ALL7の後続ページ取得は今回キャッシュミスが出たため、次リレーでもP-WORLD/当時業界記事/メーカー別5号機一覧と併用して10月末境界を閉じる。
- `ハードボイルド～グリフォンの幻影～`、`南国育ち` は2008-11-03納品群として既確認。10月漏れ監査を閉じてから11月キューへ進む。
- `鬼火`、`サイサイ` は2008-11-24納品開始資料があるため10月へ混入させない。

## resetBehavior 遡及QA

- 最終補完済み地点 **`球児（2006-09）`** を維持。
- 新規収集を優先しつつ、既存QAは別リレーで順次補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準308件地点。2008年10月6〜13および20〜31の最終漏れを、ALL7/P-WORLD/当時業界記事/メーカー別5号機一覧で再度閉じる。**
2. 今回ALL7後続ページにキャッシュミスが出たため、単一一覧へ依存せずメーカー別資料と当時記事で10月末候補を照合する。
3. 10月残存パチスロがなければ **2008-11-03 `ハードボイルド～グリフォンの幻影～` / `南国育ち` 群**から11月キューへ進む。
4. resetBehavior遡及QA再開地点は引き続き **`球児（2006-09）` の次**。
