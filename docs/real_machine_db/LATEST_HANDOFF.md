更新日: 2026-09-12

## 現在地点
- recordCount: **1423**
- latestRecordAdded: **パチスロ東京レイヴンズ — No.1423**
- latestRecordAddedPath: `docs/real_machine_db/machines/2021-07-19_pachislot-tokyo-ravens.md`
- chronologicalFrontier: **2021-07-19**
- frontierLatestMachine: **パチスロ東京レイヴンズ — No.1423**
- schema: **resetBehavior v0.7**
- status: **2021-07-19_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`docs/real_machine_db/INDEX.md`、`LATEST_HANDOFF.md`、直前No.1422「パチスロ零」を確認して開始。
- `INDEX.md` は旧表示のため、README規定どおり `LATEST_HANDOFF.md` とmain実レコードを正本として進捗判定。
- handoff指定どおりNo.1423「パチスロ東京レイヴンズ」を追加。
- 2021-07-19群をALL7、当時導入日一覧、1geki、業界記事で横断監査。本機以外のパチスロ新規ユニーク候補を固定できなかったため **2021-07-19_GROUP_CLOSED_AFTER_CROSS_SOURCE_AUDIT**。
- 次の本線は2021-08-02群。複数導入日資料で **SLOT劇場版魔法少女まどか☆マギカ[前編]始まりの物語／[後編]永遠の物語、もっと！クレアの秘宝伝 女神の歌声と太陽の子供達、パチスロコードギアス 反逆のルルーシュ3、GI優駿倶楽部3** を確認。未処理順を再監査してNo.1424から進める。

## No.1423 — パチスロ東京レイヴンズ
- path: `docs/real_machine_db/machines/2021-07-19_pachislot-tokyo-ravens.md`
- manufacturer: **オーイズミ**
- formalModel: **Sパチスロ東京レイヴンズJX**
- certificationNumber: **0S1755**
- releaseDate: **2021-07-19**
- generation/system: **6.1号機 / AT**
- settings: **1 / 2 / 3 / 4 / 5 / 6**
- CZ: **1/149 / 1/146 / 1/142 / 1/135 / 1/127 / 1/120**
- AT firstHit: **1/649.4 / 1/628.7 / 1/595.0 / 1/542.0 / 1/492.7 / 1/455.7**
- payoutRate: **97.9 / 98.9 / 100.5 / 103.0 / 106.0 / 108.8%**
- baseGamesPer50: **約43G/50枚**
- AT純増: **約2.7枚/G**
- normalCeiling: **通常時500G消化後、501～508Gは毎G約1/12でフリーズ抽選。非発生時509GでAT**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **PARTIAL_PUBLIC_RESET_CORE_WITH_ADVANTAGEOUS_SECTION_TRANSITION_DATA**

### resetBehavior v0.7 — No.1423
- 本機の公開上の特徴として、CZ「陰陽チャンス」突入時に**毎回有利区間RESET**することをメーカー説明会系業界記事と解析で一致確認。
- 有利区間移行時は通常モード1～5を抽選し、陰陽ポイント初期値とナビ1枚役高確に影響。公開表は**有利区間移行時共通**であり、設定変更専用表として扱わない。
- 設定変更専用の短縮天井、CZ/AT直撃保証、朝一専用モード、公開リセット専用数値は十分な再探索後も固定できず。
- 設定変更/据え置き/純電断の3者比較について、本機固有の直接契約表は固定できず。6.1号機一般論から埋めず、該当箇所を `UNVERIFIED_AFTER_RESEARCH` とした。
- 朝一有利区間ランプ/ガックンによる本機固有変更判別も直接資料を固定できず、確定判別条件として保存しない。
- 天井は資料上「508G天井」と「501～508Gフリーズ抽選→非発生509G AT」の表現差があるため、平均化せず定義差として保持。

## 2021-07-19群 — CLOSED
1. **パチスロ東京レイヴンズ — No.1423 / DONE**
- ALL7と当時導入日一覧で同日パチスロは本機のみを確認。
- 別メーカー・PB・地域先行・延期/段階導入を含め追加ユニーク候補を今回固定できずCLOSED。

## 次回本線の再開地点
- 最新main再同期後、**2021-08-02群の未処理順を再監査しNo.1424から継続**。
- 先行確認済み候補:
  1. SLOT劇場版魔法少女まどか☆マギカ[前編]始まりの物語／[後編]永遠の物語
  2. もっと！クレアの秘宝伝 女神の歌声と太陽の子供達
  3. パチスロコードギアス 反逆のルルーシュ3
  4. GI優駿倶楽部3
- 同日群は全メーカー・別型式/PB・地域先行・延期/段階導入まで再監査してCLOSED可否を判定する。

## 遡及 resetBehavior QA
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 今回処理済み: `docs/real_machine_db/machines/2007-05_harem-ace.md`（もえろ!ハーレムエース）→ **PARTIAL_RESEARCH_EXHAUSTED**。
- 既存性能コア `PARTIAL` は維持し、reset側のみ正式再探索。
- 設定変更/据え置き/純電断時の成立済みボーナス・RT/チャンスゾーン残状態、本機固有ガックン等は直接契約を固定できず、一般的5号機挙動から補完していない。
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-05_sangokushi-igt.md`（三國志 / IGTジャパン）**。Git追加履歴でハーレムエース後の次の実機レコード追加として確認。

## GitHub保存
- No.1423追加 commit: `acbce77362824d25c92c1c75143d5e7c63ff537d`
- ハーレムエース reset QA commit: `4f35a574fbc71fb4baa4e8fb8ba1f2a71160eca5`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-12
### No.1423 パチスロ東京レイヴンズ
- https://hazuse.com/machine/pachislot/0S1755/
- https://hazuse.com/machine/pachislot/0S1755/genre/201/
- https://1geki.jp/slot/s_tokyoravens/
- https://1geki.jp/slot/s_tokyoravens/4/
- https://1geki.jp/slot/s_tokyoravens/45/
- https://www.slopachi-quest.com/article/tokyo-ravens-tenjou/
- https://pachiseven.jp/machines/6321/cutout/3
- https://news.p-world.co.jp/articles/16829/yugitsushin
- https://news.p-world.co.jp/articles/16876/amusement
- https://www.all7.jp/plans/index/2021/07
- https://crankyseven.com/newmachine-info.htm

### 遡及QA — もえろ!ハーレムエース
- https://p-kn.com/slot/580/
- https://p-kn.com/slot/580/3488/
- https://5goki.com/net
- https://kenslo65536.com/sp/model/harlem-ace.html
- https://www.777town.net/explanation/slot_haremace.jsp

### 次回境界 2021-08-02
- https://crankyseven.com/newmachine-info.htm
- https://ichikatsu.com/newslot/
