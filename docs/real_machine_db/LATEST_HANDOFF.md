更新日: 2026-09-14

## 現在地点
- recordCount: **1693**
- latestRecordAdded: **沖ドキ！ゴージャス 25φ — No.1693**
- latestRecordAddedPath: `docs/real_machine_db/machines/2024-12-02_okidoki-gorgeous-25phi.md`
- chronologicalFrontier: **2024-12-02**
- schema: **resetBehavior v0.7**
- status: **2024-12-02_BOUNDARY_CLOSED_7_OF_7_CANONICAL_PROCESSED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1690を再同期。INDEXは旧19件表示のためREADME規定どおりLATEST_HANDOFF + 実レコードを進捗正本として使用。
- No.1691 `桃太郎電鉄 ～パチスロも定番！～`、No.1692 `沖ドキ！ゴージャス 30φ`、No.1693 `沖ドキ！ゴージャス 25φ` を追加し、性能コア + resetBehavior v0.7を収録。
- 2024-12-02導入群を当時新台カレンダーで再監査し、犬夜叉2 / ルパン三世 大航海者の秘宝 / ウルトラミラクルジャグラー / 聖戦士ダンバイン / 桃太郎電鉄 / 沖ドキ！ゴージャス30φ / 25φ の7レコードで境界をCLOSED判定。

## No.1691 — 桃太郎電鉄 ～パチスロも定番！～
- path: `docs/real_machine_db/machines/2024-12-02_momotaro-dentetsu-pachislot-mo-teiban.md`
- manufacturer: **KPE製造 / コナミアミューズメント**
- formalModel: **L桃太郎電鉄定番PU**
- inspectionCode: **4S1052**
- releaseDate: **2024-12-02**
- payoutRate: **97.9 / 98.9 / 100.3 / 105.3 / 108.2 / 111.2%**
- teibanChance: **1/183.3 → 1/153.2**
- dentetsuBonus: **1/425.5 → 1/357.8**
- base: **33.7G/50枚**
- netIncrease: **約2.5枚/G / 上位約4.0枚/G**
- reset: **有利区間・天井・内部状態・資産・金庫pt RESET**
- resetCeiling: **3年約720G→最大2年平均約480G / 1年目約25% / 2年目当選濃厚**
- resetMissCeiling: **最大6スルー→最大2スルー**
- powerCycle: **有利区間・天井・内部状態・資産・金庫pt引継ぎ**
- conflicts: **設定4機械割105.3 vs 106.4 / 設定3電鉄ボーナス1/406.0 vs 1/406.6。平均化せず保持。**

## No.1692 / 1693 — 沖ドキ！ゴージャス 30φ / 25φ
- 30φ: **エレコ / S／沖ドキ！BLACK／XA / 4S0556**
- 25φ: **ミズホ / S／沖ドキ！BLACK／GS / 4S1049**
- releaseDate: **2024-12-02**
- settings: **1 / 2 / 3 / 5 / 6 / L**
- payoutRate: **97.2 / 98.7 / 101.9 / 104.9 / 109.0%**
- initialHit: **1/288.7 → 1/246.4**
- BIG: **1/213.7 → 1/159.4 / 約210枚**
- REG: **1/288.5 → 1/239.0 / 約90枚**
- base: **約32G/50枚**
- netIncrease: **約3.5枚/G**
- resetMode: **通常A50.0% / 通常B10.2% / チャンス39.8%**
- chanceCeiling: **200G**
- normalABShorten: **25.0%で999G→399G**
- resetWithin400Approx: **約65%**
- advantageousSection: **設定変更でRESET**
- powerCycle / full carry direct table: **機種固有の直接記載を再探索後も固定できずUNVERIFIED_AFTER_RESEARCH**
- gakkun: **UNVERIFIED_AFTER_RESEARCH**
- conflict: 一部後発整理サイトに朝一振り分け **57.03/9.77/33.20** があるが、必勝本・なな徹・P-WORLD等の **50.0/10.2/39.8** が複数一致。平均化せずCONFLICT保持。

## 2024-12-02境界 — CLOSED 7/7
1. L 犬夜叉2 — No.1687 DONE
2. Lルパン三世 大航海者の秘宝 — No.1688 DONE
3. Sウルトラミラクルジャグラー — No.1689 DONE
4. スマスロ 聖戦士ダンバイン — No.1690 DONE
5. 桃太郎電鉄 ～パチスロも定番！～ — No.1691 DONE
6. 沖ドキ！ゴージャス 30φ — No.1692 DONE
7. 沖ドキ！ゴージャス 25φ — No.1693 DONE
- 当時新台カレンダーで2024-12-02のパチスロ7枠を再照合し、30φ/25φを別メーカー・別型式として独立レコード化したためCLOSED。

## 次回再開地点
- 最新mainを再同期しNo.1693と本handoffを確認。
- **No.1694候補 `Lパチスロ ダンベル何キロ持てる？`（2024-12-16）** から再開。
- 続いて同日known canonical `スマスロ 一方通行` → `Lスーパービンゴネオ` を処理する。
- 3候補処理後、PB・地域先行・別型式・延期/段階導入を再監査して2024-12-16境界をCLOSED判定する。
- 各機種は性能コア + resetBehavior v0.7を収集し、設定変更/据え置き/電源OFF→ON、天井、モード/状態、有利区間、朝一恩恵/不利、変更判別、公開朝一数値を独立管理する。
- PARTIAL/UNVERIFIEDは表記揺れ・正式型式・メーカー・シリーズ名、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間へ検索語を変え、公式・業界・主要解析・旧DB・アーカイブ/回顧資料横断後のみ確定する。

## resetBehavior 遡及QA
- 既処理確認済みカーソル: `2007-07-09_genju-haou-t.md`（幻獣覇王T）。
- 新規収集を止めず、QAリレー時に同カーソル直後の最初のresetBehavior欠損レコードを確定して遡及更新する。

## 今回の主要ソース
取得日: 2026-09-14
### 桃太郎電鉄 ～パチスロも定番！～
- KONAMI公式: https://www.konami.com/amusement/corporate/ja/topics/20240920mt/
- KONAMI公式機種ページ: https://www.konami.com/amusement/psm/slot/momotetsu/
- HAZUSE: https://hazuse.com/hd/4s1052/
- P-WORLD: https://www.p-world.co.jp/machine/database/10128
- なな徹: https://nana-press.com/kaiseki/machine/827/24604/
- 一撃 朝一: https://1geki.jp/slot/l_momotetsu/3/
- ちょんぼりすた: https://chonborista.com/slot/konami-slot/221958/
- 必勝本: https://p.hisshobon.jp/machine/4392/1/105973

### 沖ドキ！ゴージャス 25φ / 30φ
- 遊技通信: https://news.p-world.co.jp/articles/29091/yugitsushin
- P-WORLD 30φ: https://www.p-world.co.jp/machine/database/10137
- パチビー25φ: https://www.pachibee.jp/machines/index/224100009
- パチビー30φ: https://www.pachibee.jp/machines/about/224100008
- 必勝本 モード: https://hisshobon.com/machineinfo/85011/
- 必勝本 有利区間移行: https://hisshobon.com/machineinfo/85021/
- なな徹 朝一: https://nana-press.com/kaiseki/machine/856/25727/
- なな徹 モード: https://nana-press.com/kaiseki/machine/856/25731/

### 境界監査
- 2024新台導入日カレンダー: https://pachinkopachisro.com/archives/57949784.html
