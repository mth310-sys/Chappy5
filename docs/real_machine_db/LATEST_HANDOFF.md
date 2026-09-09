更新日: 2026-09-09

## 現在地点
- recordCount: **1084**
- latestRecordAdded: **賞金首2**（ネット）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-05-22_shokinkubi2.md`
- chronologicalFrontier: **2017-05-22**
- frontierLatestMachine: **賞金首2 — No.1084**
- schema: **resetBehavior v0.7**
- status: **2017-05-22_GROUP_CLOSED / NEXT_BOUNDARY_2017-05-23_TO_2017-06-04_AUDIT_REQUIRED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1082「パチスロ ラストエグザイル-銀翼のファム-」実レコードを取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを進捗正本として採用。
- 開始時mainは **1082件 / chronologicalFrontier 2017-05-22 / 5/22群OPEN**。
- handoff指定の次未処理 **「パチスロ 黒神 The Animation」** をNo.1083として登録。
- 続いて **「賞金首2」** をNo.1084として登録。
- 両機とも性能コア + resetBehavior v0.7を同時収集し、欠損・競合は検索語と資料系統を変えて再探索した。
- 5/22群は複数年別カレンダーで `タイムクロス2 / 逆転裁判 / ラストエグザイル銀翼のファム / 黒神 The Animation / 賞金首2` の5機が一致し、No.1080〜1084ですべて登録済みのため **CLOSED_FOR_CURRENT_RESEARCH** とした。

## No.1083 — パチスロ 黒神 The Animation
- manufacturer: **オリンピア**
- releaseDate: **2017-05-22**
- formalModelName: **パチスロ黒神／K2**
- certificationNumber: **7S0110**
- generation/system: **5号機 / 5.5号機 / ART / ボーナス非搭載**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_CONFLICT**

### performanceCore
- 機械割: **97.6 / 98.7 / 100.0 / 103.2 / 105.1 / 110.2%**（精密掲載値97.55〜110.21は丸め差扱い）。
- ART初当たり: **1/175.34 / 172.57 / 166.00 / 155.80 / 149.49 / 138.45**。
- ベース: **約46〜48G/50枚**（約46G表記もあり、定義差として保持）。
- ART純増: **約1.8枚/G**。
- 黒神遊戯はBGBで初期/追加G数を獲得するゲーム数上乗せ型。当時解析では30G以上。
- 通常ゲーム数天井: **467G + 最大33G前兆（最大500G）でBGB**。
- 通常BGB初戦敗北回数天井: **10回目BGBで初戦勝利確定**。

### resetBehavior v0.7
- 設定変更: ゲーム数天井RESET、BGB敗北回数天井RESELECT（最大6回）、テラカウンターRESET、マイナスポイントRESELECT。
- 純電源OFF→ON: 内部ゲーム数、BGB規定回数、マイナスポイントをCARRYOVER。テラカウンターも内部的にはCARRYOVERするが表示上は消える解析あり。
- 設定変更後BGB敗北回数天井は**最大10回→最大6回**へ短縮する主要朝一恩恵。
- 公開朝一状態値: **低確61.7 / 高確33.2 / 超高確5.1%**。
- ただし設定変更時の内部状態は、すろぱちくえすと/ちょんぼりすた/SLOT HACKが**再抽選**、一撃が**引継ぎ**とするため `CONFLICT_STATE_AFTER_SETTING_CHANGE`。
- マイナスpt再抽選: 2/4/6/8pt各10.94%、10pt42.97%、12pt10.94%、14pt1.17%、16pt0.78%、18pt0.39%。
- BGB敗北回数天井は設定別1〜6回振り分けをレコード内に保存済み。
- ガックンは情報/動画があるが当時解析で判別難度が高く、確定判別にはしない。
- advantageousSectionReset: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

## No.1084 — 賞金首2
- manufacturer: **ネット**
- releaseDate: **2017-05-22**
- formalModelName: **賞金首2／NE**
- certificationNumber: **6S1679**
- generation/system: **5号機 / 5.5号機 / A+ART / CZ経由**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.0 / 98.5 / 100.0 / 103.6 / 106.5 / 110.3%**。
- ART初当たり: **1/324 / 301 / 282 / 247 / 221 / 193**。
- CZ: **1/167 / 158 / 151 / 138 / 129 / 118**。
- ボーナス合算: **1/348 / 344 / 337 / 326 / 312 / 299**。
- ベース: **約33.3G/50枚**。
- ART純増: **約1.6枚/G**、ボーナス込み約**1.9枚/G**。
- BIG **204枚**、REG **48枚**、ART 1セット**50G+α**。
- 通常天井: **ボーナス&ART間998G+前兆**。

### resetBehavior v0.7
- 設定変更: 天井RESETし**665Gへ短縮**、内部モードRESELECT、酒場ステージ。
- 公開朝一モード: **低34.38 / 中33.59 / 高32.03%**。
- 純電源OFF→ON: ちょんぼりすたは天井・内部モードCARRYOVERを明記。一方、すろぱちくえすとは電源ON/OFF欄を調査中としていたため、CARRYOVER契約は`ANALYSIS_SINGLE_DIRECT`として保存。
- 前日天井進捗は設定変更で消えるが、998G→665G短縮が明確な朝一恩恵。
- 本機固有の確定的ガックン/初期出目/ランプ判別は再探索後も`UNVERIFIED_AFTER_RESEARCH`。
- advantageousSectionReset: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

## 2017-05-22群
- status: **CLOSED_FOR_CURRENT_RESEARCH**。
- 登録済み:
  1. タイムクロス2 — No.1080
  2. パチスロ 逆転裁判 — No.1081
  3. パチスロ ラストエグザイル-銀翼のファム- — No.1082
  4. パチスロ 黒神 The Animation — No.1083
  5. 賞金首2 — No.1084
- すろぱちくえすと2017導入日順一覧、別の2017年導入122タイトル整理で同じ5機を5/22群として確認。

## 次日付境界の先行確認
- 複数カレンダーで次の大きな全国導入群は **2017-06-05**。
- 先行候補: `ツインエンジェルBREAK / テイルズ オブ シンフォニア / アベンジャーズ / 信長の野望 創造`。
- `ケロロ軍曹` は2-9伝説では2017-06-05群、すろぱちくえすとでは2017-06-19群に掲載され、**導入日CONFLICT候補**。処理時に公式・業界・当時解析を追加照合し、地域先行/本導入の可能性も分離する。
- 5/23〜6/04に独立全国導入機が存在しないか、日付境界をメーカー横断で最終監査してから6/5群へ進むこと。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05_gold-shio-30.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05-15_looney-tunes-bia.md`。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1084を再取得。
2. **1084件 / chronologicalFrontier 2017-05-22 / 5/22群CLOSED** を正本として継続。
3. **2017-05-23〜2017-06-04境界監査**を先に完了する。
4. 境界に未処理全国導入機がなければCLOSEDし、**2017-06-05群の次未処理機**をNo.1085として処理する。
5. 6/5群は全メーカー横断で列挙して順に登録。`ケロロ軍曹`の日付競合を必ず再照合する。
6. 遡及QAは `2006-05-15_looney-tunes-bia.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1083 黒神 The Animation
- HAZUSE: https://hazuse.com/machine/pachislot/7S0110/
- HAZUSE ART解析: https://hazuse.com/machine/pachislot/7S0110/genre/209/
- K-Navi: https://p-kn.com/slot/2770/
- P-WORLD: https://www.p-world.co.jp/machine/database/8347
- 一撃: https://1geki.jp/slot/s_kurokami_theanime/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_kurokami_theanime/3/
- ちょんぼりすた: https://chonborista.com/slot/orinpia-slot/35618/
- すろぱちくえすと: https://www.slopachi-quest.com/article/kurokami/
- すろかい: https://slotkaiseki.hatenablog.com/entry/kurokami
- SLOT HACK: https://slothack.net/matome/3346/

### No.1084 賞金首2
- NET発売発表（DreamNews掲載）: https://www.dreamnews.jp/press/0000150006/
- HAZUSE: https://hazuse.com/machine/pachislot/6S1679/
- HAZUSE ART解析: https://hazuse.com/machine/pachislot/6S1679/genre/209/
- ちょんぼりすた: https://chonborista.com/slot/net-slot/36138/
- すろぱちくえすと: https://www.slopachi-quest.com/article/showkinkubi2/

### 5/22群監査 / 次境界
- すろぱちくえすと 2017導入日順: https://www.slopachi-quest.com/article/2017-sindai/
- 2017年導入機種まとめ: https://squid-and-ball.net/archives/776
- 2-9伝説新台一覧: https://29den.com/newslot/
- 2017新台カレンダー: https://slotnews777.blog.fc2.com/blog-entry-3121.html
