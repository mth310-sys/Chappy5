更新日: 2026-09-15

## 現在地点
- recordCount: **1823**
- latestRecordAdded: **スマスロ タコスロ — No.1823**
- latestRecordAddedPath: `docs/real_machine_db/machines/2026-09-07_takosuro.md`
- chronologicalFrontier: **2026-09-07 CLOSED 6/6**
- schema: **resetBehavior v0.7**
- status: **2026-09-15_BOUNDARY_CLOSED_CURRENT_FRONTIER_REACHED_REAUDITED**

## 今回の進捗 — 2026-09-15 17時台 現行差分再監査（relay continuation）
- 最新mainの `README.md`、ミッションv0.7、`INDEX.md`、本LATEST_HANDOFF、直前No.1823実レコードを再取得して同期確認。
- INDEXは2026-08-31の旧スナップショット（19件）のため、README規定どおり **LATEST_HANDOFF + 最新実レコード** を進捗正本として使用。
- 2026-09-15時点の現行差分を、新台カレンダー系・業界記事・全国店舗導入観測で再監査。
- 全国店舗導入観測の直近9/14項目はパチンコ機群で、9/7以降に全国初回導入と固定できる未収録パチスロ本体は今回も確認できなかった。
- パチナビのメーカー別最新一覧でも直近パチスロ導入として2026-09-07機が表示され、現行フロンティアと整合。
- よって **No.1824は作成せず、recordCount 1823 / 2026-09-07 CLOSED 6/6を維持**。
- 将来導入予定・検定通過のみの型式は先行登録しない。

## 2026-09-07 — CLOSED 6/6
1. スマスロ リコリス・リコイル — No.1818
2. Lパチスロ 彼女、お借りします — No.1819
3. L青春ブタ野郎はバニーガール先輩の夢を見ない — No.1820
4. モグモグ風林火山 大海戦の巻 — No.1821
5. パチスロ 見える子ちゃん — No.1822
6. スマスロ タコスロ — No.1823

## No.1823 — スマスロ タコスロ
- path: `docs/real_machine_db/machines/2026-09-07_takosuro.md`
- status: `COMPLETE_CORE_WITH_RESET_RESEARCH`
- manufacturer: ユニバーサルブロス
- formalModel: `LB／タコスロBD`
- certificationNumber: `6S0085`
- releaseDate: 2026-09-07
- settings: 1 / 2 / 5 / 6
- payoutRate market: 98.7 / 100.5 / 103.3 / 106.2%
- payoutRate full攻略: 100.7 / 102.6 / 105.5 / 108.5%
- BIG: 1/324.4 / 1/318.1 / 1/309.1 / 1/297.9
- REG: 1/352.3 / 1/336.1 / 1/312.1 / 1/300.6
- 合算: 1/168.9 / 1/163.4 / 1/155.3 / 1/149.6
- base: 約36.6G/50枚（設定1）
- BIG: 最大153枚+BT、BT込み平均/期待約360〜361枚
- REG: 最大98枚

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

## 9/7・9/8重複境界監査（維持）
- `LB異世界かるてっとKR` → 既存 `A-SLOT+ 異世界かるてっと BT`（canonical 2026-04-06）の後発店舗導入。
- `L/SHAMAN KING/SS` → 既存 `スマスロ シャーマンキング`（canonical 2025-02-03）の後発店舗導入。
- `LパチスロULTRAMAN最終決戦ME` → canonical 2026-07-06。9/8観測は後発店舗導入。
- `Lからくりサーカス2jG` → canonical 2026-07-06。9/8観測は後発店舗導入。
- `LプリズムナナCC` → canonical 2025-12-08。9/8観測は後発店舗導入。
- `L七つの魔剣が支配するPU` → canonical 2025-01-20。9/8観測は後発店舗導入。

## resetBehavior retrospective QA
- qaStatus: **CURSOR_UNRESOLVED_ON_CURRENT_MAIN_SEARCH**
- 旧カーソル候補 `2007-07-09_genju-haou-t.md / 幻獣覇王T` は最新main上で確定できていないため、外部導入順から次機種を推測して既存COMPLETE_COREを書き換えない。
- 既存COMPLETE_COREはリセット欠損のみを理由に崩さず、性能コアとreset QA状態を別管理する。

## sources summary
retrievedAt: 2026-09-15
- 6確 新台予定: https://www.kaku6.jp/
- パチナビ 2026年新台カレンダー: https://pachinavi.net/calendar/
- パチナビ メーカー別一覧（例・オリンピア）: https://pachinavi.net/makers/olympia/
- P-Summa 2026年9月パチスロ新台整理: https://psumma.jp/pachislo/71626/
- 全国店舗導入観測: https://slot.bz/shindai
- 遊技日本 業界ニュース: https://yugi-nippon.com/
- No.1823 遊技通信/P-WORLD: https://news.p-world.co.jp/articles/33759/yugitsushin
- No.1823 HAZUSE: https://hazuse.com/machine/pachislot/6S0085/
- No.1823 6確: https://www.kaku6.jp/slot/tacoslot/

## 次回再開地点
- 最新mainを再同期しNo.1823実レコードと本handoffを確認。
- **性能コア時系列本線は2026-09-15時点の現行フロンティア到達。No.1824を先行作成しない。**
- 次回も9月導入漏れ・新規型式の差分監査を行い、店舗単位の後発導入は型式と全国初回導入日を照合して重複追加しない。
- retrospective resetBehavior QAはカーソルがmain上で確定できるまで外部順から推測して開始しない。
- 将来導入予定機は実際の導入日が現行日になった時点で再監査し、次の未処理本体からNo.1824以降を継続する。
