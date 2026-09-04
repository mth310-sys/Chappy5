# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **574**
- latestMachineAdded: **キングハイビ-30**（パイオニア / 2011-06-05納品開始予定）
- latestRecord: `docs/real_machine_db/machines/2011-06-05_king-highbi-30.md`
- chronologicalFrontier: **2011-06-05**
- frontierLatestExactDateMachine: **キングハイビ-30**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッションv0.7、`INDEX.md`、`LATEST_HANDOFF.md`、573前線レコード「バリスタゴルフ」を再取得して開始。
- `INDEX.md` は旧地点のため、README規約どおり最新 `LATEST_HANDOFF.md` とmachineレコードを進捗正本として使用。
- 573件地点の次は6/6群とされていたが、2011-05-31〜06-05境界を再監査した結果、グリーンべると当時記事に「キングハイビ-30」の **2011-06-05納品開始予定**を確認。6/6群へ飛ばさず574件目として追加。

## 今回追加 — 574 キングハイビ-30

- メーカー: **パイオニア**
- 型式名: **キングハイビV-30**
- 検定番号: **0S1420**
- 時系列キー: **2011-06-05（納品開始予定）**
- 5号機 / **ノーマルAタイプ / 完全告知 / 30φ**
- 機械割: **96 / 98 / 100 / 102 / 105 / 108%**
- BIG: **1/255 / 1/251 / 1/245 / 1/240 / 1/231 / 1/222**
- REG: **1/569 / 1/541 / 1/516 / 1/481 / 1/431 / 1/368**
- ボーナス合算: **1/176 / 1/171 / 1/166 / 1/160 / 1/150 / 1/138**
- 獲得枚数: **BIG約307枚 / REG約100枚**
- 1000円あたり: **約34〜36G**
- AT/ART/RT継続純増: **NOT_APPLICABLE_NORMAL_TYPE**

### chronology CONFLICT / SOURCE_DATE_DIFFERENCE

- グリーンべると当時記事: **2011-06-05納品開始予定**
- プレイグラフ転載 / K-Navi: **2011-06-06ホール導入**
- Hazuse: **2011-06-03導入開始日**
- パイオニア公式: **2011年6月発売**（月粒度）
- 日付定義/DB差を平均せず全て保持し、最も直接的な納品開始記述の06-05を時系列キーに採用。

### resetBehavior v0.7 — 574

- P-WORLDで「ボーナスのみでコインを増やす、シンプルなノーマルタイプ」を直接確認。AT/ART/CZおよび長期ゲーム数モードは非搭載として整理。
- `gameCounterReset`: **NOT_APPLICABLE_NO_GAME_COUNT_SYSTEM_CONFIRMED**。
- `ceilingAfterReset`: **NONE_CONFIRMED_AFTER_RESEARCH**。K-Navi、Hazuse、P-WORLD、公式、当時業界記事を横断しても本機のゲーム数天井/設定変更専用短縮天井は確認できず。
- `modeAfterReset`: **NOT_APPLICABLE_NO_LONG_TERM_MODE_CONFIRMED**。
- `stateAfterReset`: **NOT_APPLICABLE_FOR_AT_ART_CZ_STATE**。成立済みボーナス等の低レベル内部状態は別途未確認。
- 有利区間: **NOT_APPLICABLE**。
- 朝一短縮天井、高確スタート、RT/ART優遇、朝一特定G数当選率等の公開数値: **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更時の低レベル出目/フラグ、据え置き、単純電源OFF→ON、ガックン/ランプ等の変更判別は本機固有資料を確定できず **UNVERIFIED_AFTER_RESEARCH**。一般的な5号機挙動で補完しない。
- 性能コア `COMPLETE_CORE` を維持し、reset QAは `PARTIAL_RESET_QA` として別管理。

## 主要出典 — 574（取得日 2026-09-04）

- パイオニア公式 2011年製品一覧: `https://www.slot-pioneer.co.jp/products/2011.html`
  - 2011年6月発売、製品概要
- グリーンべると / P-WORLD業界ニュース: `https://news.p-world.co.jp/articles/4588/greenbelt`
  - 2011-06-05納品開始予定、設定1/6のBIG・REG・合算・出玉率端点、307/100枚、34〜36G
- P-WORLD: `https://www.p-world.co.jp/machine/database/6326`
  - パイオニア、5号機ノーマルタイプ、307/100枚、ボーナスのみのゲームフロー
- K-Navi: `https://p-kn.com/slot/1402/`
  - 2011-06-06ホール導入開始、ノーマルAタイプ、確率端点、規定払い出し
- Hazuse: `https://hazuse.com/machine/pachislot/0S1420/`
  - 型式名/検定番号、2011-06-03、BIG/REG/合算/PAY OUT全設定
- Pマンズ / プレイグラフ・グリーンべると転載: `https://p-mans.blogspot.com/2011/04/`
  - 06-06ホール導入予定、06-05納品開始予定、主要性能照合

## 今回のGitHub更新

- 574: `docs/real_machine_db/machines/2011-06-05_king-highbi-30.md`
  - create commit: `ac6a375de0c26cd97500ed9edc12f29f6ac76714`
- LATEST_HANDOFF: 本更新

## 遡及QA継続地点

- **怪胴王 (`docs/real_machine_db/machines/2006-11_kaidouou.md`) まで補完済み**を維持。
- `2006-11-27_thunder-v-special.md` は既にresetBehavior収集済みのため重複QA対象外。
- 今回、recursive machine treeの再取得も行ったが、大規模tree応答から怪胴王直後の「最初の実在resetBehavior欠損」を日付/実パス順で安全に一意確定できなかった。QA済み範囲を推測では動かさない。
- 次回も怪胴王直後のmachine pathを直接列挙/取得し、最初のresetBehavior欠損を確定してから遡及する。

## 次回再開地点

1. **recordCount 574 / chronologicalFrontier 2011-06-05**。最新main README / mission / INDEX / LATEST_HANDOFF / 573・574レコードを再取得。
2. **2011-06-05同日群の残存未登録を最終監査**。
3. 閉じたら **2011-06-06同日群**へ進む。既確認候補は **「パチスロ エイリヤンビギンズ」（サミー）、「スターマン バイキング」（SANKO）**。repo重複を確認し、最古未処理から575件目とする。
4. **スカイラブ3は2011-06-27ホール導入開始**。6/6群より先へ誤ジャンプしない。
5. 遡及QAは怪胴王直後の最初の実在resetBehavior欠損machine path確定から再開。
6. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ・reset検索語を変え、資料系統を横断した後だけ残す。CONFLICTは平均しない。
