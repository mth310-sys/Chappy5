更新日: 2026-09-13

## 現在地点
- recordCount: **1528**
- latestRecordAdded: **パチスロ 魔法少女育成計画 — No.1528**
- latestRecordAddedPath: `docs/real_machine_db/machines/2022-10-17_mahou-shoujo-ikusei-keikaku.md`
- chronologicalFrontier: **2022-10-17**
- frontierLatestMachine: **パチスロ 魔法少女育成計画 — No.1528**
- schema: **resetBehavior v0.7**
- status: **2022-10-17_GROUP_CLOSED_2_OF_2_KNOWN_CANONICAL_PROCESSED**

## 今回の同期 / 進捗
- 最新mainの `README.md`、正本 `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、旧表示の `docs/real_machine_db/INDEX.md`、最新 `LATEST_HANDOFF.md`、直前No.1527 `パチスロ ダンまち外伝 ソード・オラトリア` を確認して開始。
- `INDEX.md` は完了済みレコード数19の旧表示のため、README規定どおり最新 `LATEST_HANDOFF.md` とmain実レコードを進捗正本として扱った。
- handoff指定のNo.1528 `パチスロ 魔法少女育成計画` を性能コア＋resetBehavior v0.7で追加。
- 追加直後の再照合で検定番号についてPiDEA掲載値 `2S0722` と複数都道府県公安委員会原資料 `2S0772` の競合を発見。沖縄・和歌山・広島の公的原資料3系統が一致する `2S0772` をcanonicalとし、PiDEA値は `CONFLICT_INDUSTRY_TRANSCRIPTION` として保持してレコードを修正済み。
- 2022-10-17群は `ダンまち外伝 ソード・オラトリア` / `魔法少女育成計画` のknown canonical 2機を処理し **CLOSED 2/2**。
- 境界再監査で、Greenbelt 2022-10-03更新スケジュールに **2022-10-24 `ハッピージャグラーVⅢ`** が存在することを再確認。GitHub mainに同機レコードは未存在。よって次回は11/7へ飛ばさず、No.1529候補として10/24を処理する。

## No.1528 — パチスロ 魔法少女育成計画
- path: `docs/real_machine_db/machines/2022-10-17_mahou-shoujo-ikusei-keikaku.md`
- manufacturer: **カルミナ / ネット**
- formalModel: **SまほいくNB**
- inspectionCode: **2S0772**（沖縄・和歌山・広島公安委員会告示で一致。PiDEA東京都記事の2S0722はCONFLICTとして保持）
- releaseDate: **2022-10-17 canonical**
- generation/system: **6.5号機 / A+ART / 技術介入 / 完走型ART**
- payout（市場予測）: **設定1 97.7 / 2 97.8 / 3 100.3 / 4 102.2 / 5 104.3 / 6 106.1%**
- payout（完全攻略）: **102.5 / 103.8 / 104.6 / 106.0 / 107.0 / 107.2%**
- ART初当り: **1/243.3 / 237.3 / 230.6 / 224.0 / 216.9 / 211.8**
- ボーナス合算: **1/189 / 188 / 187 / 185 / 183 / 252**
- baseGamesPer50: **約36.7G/50枚（設定1目安）**
- netIncrease: **設定1 約0.60枚/G → 設定6 約0.25枚/G**
- basicPayout: **同色BIG203枚 / 異色BIG182枚 / REG49枚 / ART20・40・100G完走型**
- coreStatus: **COMPLETE_CORE**
- resetBehaviorQA: **COMPLETE_RESET_CORE_WITH_COUNTER_DEFINITION_CONFLICT_RESOLVED**
- confidence: **OFFICIAL / PUBLIC_RECORD / INDUSTRY / ANALYSIS_HIGH**

### resetBehavior v0.7 — No.1528
- **設定変更**: 有利区間・内部モード/状態・フリーズ高確・キャンディー獲得数RESET。
- **周期カウンタ**: 詳細解析では設定変更でも**現在周期内ゲーム数はCARRY_OVER、周期数はRESET**。旧整理資料の「天井RESET」と競合するため、粒度差をCONFLICTとして残した。
- **据え置き**: 周期内ゲーム数・周期数・内部モード/状態・フリーズ高確・キャンディーをCARRY_OVER側として扱う。
- **純電源OFF→ON**: 周期内ゲーム数・周期数・内部モード/状態・フリーズ高確・キャンディー・有利区間CARRY_OVER。ただし表示上のゲーム数等はRESETされる。
- **CZ間天井**: CZ転落後300Gで `まほいくとらいある`。
- **救済天井**: ボーナス/ART非当選のまま最大3周期（最大約900G+α）でレイジングゾーン。2周期目12.5% / 3周期目87.5%（通常救済仕様で、朝一専用数値ではない）。
- **朝一恩恵**: 固定高モード、短縮天井、朝一CZ確定等は `NONE_CONFIRMED_AFTER_RESEARCH`。
- **朝一不利**: 設定変更で周期数がRESETされるため、前日からの2/3周期救済進行は失われる。
- **有利区間ランプ**: 非搭載。ランプ判別不可。
- **変更判別**: 設定変更・電断とも通常時はスノーホワイトステージ開始。表示だけでは判別不可。本機固有ガックンは再探索後 `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: 設定変更専用の比較可能なモード振り分け/CZ・ART当選率/恩恵発生率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## conflicts / definition notes — No.1528
- **導入日**: K-Navi/一撃/イチカツ/ちょんぼりすた/導入直後実戦記事は2022-10-17で一致。Greenbelt 10/3更新スケジュールは10/3欄、ALL7は10/07予定。canonicalは実導入資料多数一致の10/17、他は `CONFLICT_RELEASE_SCHEDULE`。
- **検定番号**: 公安委員会原資料3系統は2S0772。PiDEA東京都記事は2S0722。平均・混同せず2S0772をcanonical、2S0722をalternate conflict。
- **型式**: 公式/公安委員会は `SまほいくNB`。一部検定速報の `SまほいくNBA` は速報表記差として保持。
- **リセット天井表現**: 旧スロパチクエストは「天井RESET」、一撃詳細/Altemaは「ゲーム数引継ぎ・周期数RESET」。詳細一致2系統をcanonicalとし、旧表現はCONFLICT注記。

## 2022-10-17群 — CLOSED 2/2 known canonical
1. `パチスロ ダンまち外伝 ソード・オラトリア` — **No.1527**
2. `パチスロ 魔法少女育成計画` — **No.1528**

境界監査:
- イチカツ2022新台カレンダーは10/17群を上記2機として掲載。
- Greenbelt 10/3更新スケジュールでは魔法少女育成計画が10/3欄へ混在するが、実導入系複数資料は10/17で一致するため、10/17 canonical群としてCLOSED。
- PB・別型式・30Φ派生・地域先行について今回確認した範囲で10/17追加機は固定できず。

## 次の年代境界 — 2022-10-24
- Greenbelt 2022-10-03更新スケジュールの10/24パチスロ欄に **`ハッピージャグラーVⅢ`（北電子）** を確認。
- GitHub main検索で同機既存レコードなし。
- **次回本線は No.1529候補 `ハッピージャグラーVⅢ` — 2022-10-24。**
- これを処理するまで11/7群へ進まない。
- 10/24群処理後、2022-11-07群（花火絶景 / SLOTとある科学の超電磁砲 / パチスロ鉄拳4アルティメットデビルVer. / ラストユートピア / パチスロ幼女戦記等）のcanonical構成を改めて横断監査する。資料間で11/7構成差があるため、先に固定しない。

## 遡及 resetBehavior QA
- 次回遡及QAカーソル: **`docs/real_machine_db/machines/2007-03_wild7.md`（ワイルド7）**。
- 本線を優先し、今回QAカーソルは進めていない。

## 次回本線の再開地点
- **2022-10-24 / No.1529候補 `ハッピージャグラーVⅢ`。**
- No.1528以前の性能コアはやり直さない。
- 処理前に10/24のPB・別型式・地域先行・延期/段階導入を再監査し、同日群の全候補を確定する。

## GitHub保存
- No.1528初回追加 commit: `5bd92b0a11cf9fee53623abfff6bd9ba0c1df00e`
- No.1528検定番号/公的原資料修正 commit: `40f92f630f25fdd39d726f68fbe750b91be1fe1d`
- `LATEST_HANDOFF.md`: この更新commitでmainへ反映。

## 主要出典 — 取得日 2026-09-13
### No.1528 パチスロ 魔法少女育成計画
- https://carmina-gaming.co.jp/product/release/2022/
- https://www.reflex.okinawa/pdf/2022/8.29.pdf
- https://www.police.pref.wakayama.lg.jp/koan/kenteiyuugiki/R4/kenteikokuji0830.pdf
- https://www.pref.hiroshima.lg.jp/soumu/kenpo-pdf/2022/t068/2022-t068-029.pdf
- https://www.pidea.jp/articles/1663809222
- https://news.p-world.co.jp/articles/21678/nippon
- https://p-kn.com/slot/3851/
- https://1geki.jp/slot/s_mahoiku/
- https://1geki.jp/slot/s_mahoiku/4/
- https://1geki.jp/slot/s_mahoiku/5/
- https://altema.jp/pachimo/mahoiku
- https://www.slopachi-quest.com/article/mahoshojoikuseikeikaku-tenjou/
- https://nana-press.com/kaiseki/machine/441/12143/
- https://ichikatsu.com/mahoiku/
- https://kenslo65536.com/kaiseki/mahouiku.html
- https://news.p-world.co.jp/articles/21806/greenbelt
- https://www.all7.jp/plans/index/2022/10

### 次回境界確認
- https://news.p-world.co.jp/articles/21806/greenbelt
- https://ichikatsu.com/newslot2022/
