更新日: 2026-09-15

## 現在地点
- recordCount: **1823**
- latestRecordAdded: **スマスロ タコスロ — No.1823**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-09-07_takosuro.md`
- chronologicalFrontier: **2026-09-07 CLOSED 6/6**
- schema: **resetBehavior v0.7**
- status: **2026-09-07_BOUNDARY_CLOSED_CURRENT_2026-09-15_FRONTIER_REACHED**

## 今回の進捗
- 最新mainのREADME、ミッションv0.7、INDEX、LATEST_HANDOFF、直前No.1823実レコードを再同期。
- INDEXは旧スナップショットのため `LATEST_HANDOFF + 実レコード` を進捗正本として使用。
- 2026-09-07 primary canonical queue 6/6完了後の型式境界監査を実施。
- 最優先候補 `LB異世界かるてっとKR` は **A-SLOT+ 異世界かるてっと BT** の既存型式で、全国導入開始日は2026-04-06。9/7店舗導入記録は地域/店舗単位の後発導入であり、新規本体・別スペックではないため追加しない。
- 次点 `L/SHAMAN KING/SS` は **スマスロ シャーマンキング** の既存型式で、全国導入開始日は2025-02-03。9/7店舗導入記録は後発導入であり、新規本体・別スペックではないため追加しない。
- 6確の2026年9月新台一覧は9/7の6機種のみ、パチナビも9月掲載6機種で一致。別系統の9月新台整理も同じ6機種を列挙。
- よって **2026-09-07境界をCLOSED 6/6** と判定。2026-09-15時点の公開済み現行導入フロンティアへ到達。

## No.1823 — スマスロ タコスロ
- path: `docs/real_machine_db/machines/2026-09-07_takosuro.md`
- manufacturer: **ユニバーサルブロス**
- formalModel: **LB／タコスロBD**
- certificationNumber: **6S0085**
- releaseDate: **2026-09-07**
- settings: **1 / 2 / 5 / 6**
- payoutRate market: **98.7 / 100.5 / 103.3 / 106.2%**
- payoutRate full攻略: **100.7 / 102.6 / 105.5 / 108.5%**
- BIG: **1/324.4 / 1/318.1 / 1/309.1 / 1/297.9**
- REG: **1/352.3 / 1/336.1 / 1/312.1 / 1/300.6**
- 合算: **1/168.9 / 1/163.4 / 1/155.3 / 1/149.6**
- base: **約36.6G/50枚（設定1）**
- BIG: **最大153枚+BT、BT込み平均/期待約360〜361枚**
- REG: **最大98枚**

### No.1823 resetBehavior v0.7
- 導入後複数解析で天井非搭載。設定変更時のゲーム数/周期天井短縮はN/A。
- 設定変更専用の朝一モード、初当たり/CZ優遇、主要不利要素は多語再探索後もNONE_CONFIRMED_AFTER_RESEARCH。
- 据え置き/純電断の天井・周期・ポイント引継ぎは公開ゲーム性上N/A。
- 設定変更/据え置き/純電断時の演出モード保持・初期化、本機固有の有利区間契約、ガックン/即時変更判別、ボーナス成立状態等の特殊契約はUNVERIFIED_AFTER_RESEARCH。
- 一般的なスマスロ/BT仕様から有利区間挙動を推測補完しない。

## 直前境界
### 2026-08-03 — CLOSED 8/8
- L邪神ちゃんドロップキック — No.1809
- スマスロ やじきた道中記参る！ — No.1810
- Lすーぱぁびん娘 — No.1811
- スマスロ とんでもスキルで異世界放浪メシ — No.1812
- スマスロ とある魔術の禁書目録2 — No.1813
- スマスロ ストリートファイター6 — No.1814
- スロット ワールドダイスター — No.1815
- LBトリプルクラウンX-300 — No.1816

### 2026-08-17 — CLOSED 1/1
- Lパチスロ 喰霊-零-Re — No.1817

## 2026-09-07 — CLOSED 6/6
1. スマスロ リコリス・リコイル — No.1818
2. Lパチスロ 彼女、お借りします — No.1819
3. L青春ブタ野郎はバニーガール先輩の夢を見ない — No.1820
4. モグモグ風林火山 大海戦の巻 — No.1821
5. パチスロ 見える子ちゃん — No.1822
6. スマスロ タコスロ — No.1823

## 9/7境界監査結果
### LB異世界かるてっとKR — SKIP_EXISTING_MACHINE_LATE_STORE_INSTALL
- canonical machine: A-SLOT+ 異世界かるてっと BT
- manufacturer: Sammy / 製造 銀座
- formalModel: LB 異世界かるてっと KR
- certificationNumber: 5S1513
- canonical releaseDate: 2026-04-06
- 6確、HAZUSE、遊技通信/P-WORLDが2026-04-06全国導入で一致。
- 2026-09-07に同型式を新規導入した店舗記録は存在するが、型式一致のため新スペックではなく店舗単位の後発導入と判定。

### L/SHAMAN KING/SS — SKIP_EXISTING_MACHINE_LATE_STORE_INSTALL
- canonical machine: スマスロ シャーマンキング
- manufacturer: エレコ
- formalModel: L／SHAMANKING／SS
- certificationNumber: 430573
- canonical releaseDate: 2025-02-03
- 6確、HAZUSE、P-WORLD/解析資料が2025-02-03導入で一致。
- 2026-09-07に同型式を新規導入した店舗記録は存在するが、既存2025機の後発導入と判定。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 過去カーソルは外部順から推測補完せず、性能コア本線と分離維持。
- 既存COMPLETE_COREはリセット欠損のみを理由に崩さない。

## sources summary
retrievedAt: 2026-09-15
No.1823:
- 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/33759/yugitsushin
- グリーンべると: https://web-greenbelt.jp/post-114030/
- HAZUSE: https://hazuse.com/machine/pachislot/6S0085/
- 6確: https://www.kaku6.jp/slot/tacoslot/
- 必勝本: https://hisshobon.com/machineinfo/142570/
- ジャグラーズネット: https://jugglersnet.com/bt/tacoslo
- ちょんぼりすた: https://chonborista.com/slot/universal-slot/262349/
- スロベース: https://slobase.jp/machines/takosuro
- こぜログ: https://kozelog.net/machine/universal/takosuro/

9/7 boundary audit:
- 6確 2026年9月一覧: https://www.kaku6.jp/
- パチナビ新台カレンダー: https://pachinavi.net/calendar/
- A-SLOT+異世界かるてっとBT 6確: https://www.kaku6.jp/slot/isekaiquartet/
- A-SLOT+異世界かるてっとBT HAZUSE: https://hazuse.com/machine/pachislot/5S1513/
- 遊技通信/P-WORLD 異世界かるてっとBT発表: https://news.p-world.co.jp/articles/32767/yugitsushin
- スマスロ シャーマンキング 6確: https://www.kaku6.jp/slot/shamanking/
- スマスロ シャーマンキング HAZUSE: https://hazuse.com/machine/pachislot/SX0096/
- スマスロ シャーマンキング P-WORLD: https://www.p-world.co.jp/machine/database/10188
- 店舗型式記録（9/7異世界かるてっとKR）: https://slot.bz/shindai/yamagata/2070
- 店舗型式記録（9/7 SHAMAN KING SS）: https://slot.bz/shindai/mie/6681

## 次回再開地点
- 最新mainを再同期しNo.1823実レコードと本handoffを確認。
- **性能コア時系列本線は2026-09-15時点の現行フロンティア到達。次の確定済み全国導入日は2026-10-05で未来日のため、現時点ではNo.1824を先行作成しない。**
- 次回は新たな9月導入漏れ/地域先行ではない全国新規本体が判明していないか境界差分監査を行う。新規本体がなければ本線レコード追加なし。
- retrospective resetBehavior QAはカーソルがmain上で確定できるまで外部順から推測して開始しない。
- 2026-10-05が現行日になった後は、最新mainと当日導入実績を再監査して次の未処理機種からNo.1824以降を継続する。
