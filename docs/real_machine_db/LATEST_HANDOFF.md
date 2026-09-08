更新日: 2026-09-09

## 現在地点
- recordCount: **1072**
- latestRecordAdded: **パチスロ マクロスフロンティア3**（SANKYO / 株式会社三共）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-05-08_macross-frontier3.md`
- chronologicalFrontier: **2017-05-08**
- regionalEarlyFrontierNote: **2017-05-01 関東圏など一部地域で先行導入**
- frontierLatestMachine: **パチスロ マクロスフロンティア3 — No.1072**
- schema: **resetBehavior v0.7**
- status: **2017-05-08_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、No.1071「SLOTアカギ～闇に降り立った天才～」実レコードを取得して開始。
- INDEX本文は初期19件時点の旧スナップショットのため、README規定どおり最新handoffと実レコードを進捗正本として採用。
- 開始時mainは **1071件 / chronologicalFrontier 2017-04-24 / 4/24群CLOSED**。
- 4/25〜4/30境界に追加全国導入パチスロ本線を固定できないという前handoff監査を引継ぎ。
- 次未処理「パチスロ マクロスフロンティア3」をNo.1072として登録。
- 導入日は、SANKYO公式が2017.05、K-Navi/パチナビ/ちょんぼりすた/当時解析が **2017-05-08本導入**、複数資料が **関東圏など一部地域2017-05-01先行** と明記。パチビー/期待値見える化の5/1単独表記も保持し、DB canonicalを5/8・regionalEarlyReleaseDateを5/1として定義差を分離した。
- 2017-05-08群には少なくとも **パチスロサクラ大戦～熱き血潮に～ / パチスロ 呪怨 / 忍魂 ～暁ノ章～ / ラッキーベガス** が未処理候補として残るため群はOPEN。
- 遡及reset QAカーソルは `2006-05-15_looney-tunes-bia.md` を維持。新規本線を優先し今回は未更新。

## No.1072 — パチスロ マクロスフロンティア3
- manufacturer: **SANKYO / 株式会社三共**
- releaseDate canonical: **2017-05-08**
- regionalEarlyReleaseDate: **2017-05-01（関東圏など一部地域）**
- formalModelName: **パチスロ マクロスフロンティア3**
- certificationNumber: **6S1768**
- generation/system: **5号機 / 5.5号機 / A+ART / CZ / シナリオ継続型ART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割 canonical: **96.9 / 98.1 / 99.9 / 102.7 / 105.5 / 110.1%**。
- 設定2のみ **97.1% vs 98.1%** の資料競合あり。P-WORLD・パチスロデータ等の複数一致98.1%をcanonical、97.1%をCONFLICT保持。
- ART初当たり: **1/561 / 527 / 476 / 408 / 356 / 301**。
- CZ「歌姫チャンス」: **1/292 / 276 / 255 / 227 / 207 / 182**。
- リアルボーナス: **全設定約1/145**。
- 50枚ベース: **約34G**。
- ART「ギャラクシーツアー」: **単体約1.7枚/G、ボーナス込み約2.0枚/G、1セット40G**。
- ボーナス基本獲得: **約60枚**。
- 通常天井: **ボーナス/CZ/ART間555GでART**。CZ当選でも天井Gはリセット。

### resetBehavior v0.7
- 設定変更: **天井RESET / 液晶G数0G / ランカの部屋系開始**。
- 純電源OFF→ON: **天井内部G数CARRYOVER / 液晶表示のみ0G / CZシナリオCARRYOVER / ランカの部屋系開始**。
- 設定変更時のCZシナリオは当時資料で「調査中」。検索語・資料系統変更後も直接契約を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置きの本機固有フル契約は独立資料で直接固定できず `UNVERIFIED_DIRECT_CARRYOVER_AFTER_RESEARCH`。純電断情報から全状態を自動転記していない。
- 設定変更専用短縮天井、朝一専用CZランク/モード振り分け、高確開始率、特定G以内当選率は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 液晶G数は設定変更・純電断とも0Gになるため0G表示単独では判別不可。前日G数が判明している場合は内部天井進行が推測材料。
- 本機固有ガックン/初期出目/ランプの確定変更判別は `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### data quality / conflicts
- releaseDateは単純な日付CONFLICTではなく **5/1地域先行 vs 5/8本導入** の定義差として保存。
- 設定2機械割 **97.1% vs 98.1%** はCONFLICT。98.1%をcanonical。
- 5号機クロニクルの同機種欄には別世代マクロスとみられるスペック混線があるため、機械割クロスチェック以外は採用していない。
- ART純増1.7枚/Gとボーナス込み2.0枚/Gは定義差。

## 2017-05-08群監査
- status: **OPEN**。
- 登録済み: **パチスロ マクロスフロンティア3 — No.1072**。
- 未処理候補として複数資料で2017-05-08導入を確認済み:
  1. **パチスロサクラ大戦～熱き血潮に～**（Sammy）
  2. **パチスロ 呪怨**（藤商事）
  3. **忍魂 ～暁ノ章～**（大都技研）
  4. **ラッキーベガス**（前handoff候補。次回、導入日/メーカーを別系統資料で再固定してから処理）
- したがって5/8群はまだCLOSEDにしない。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-05_gold-shio-30.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `2006-05-15_looney-tunes-bia.md`。
- 新規本線と並行して後続QA時に継続する。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1072を再取得。
2. **1072件 / chronologicalFrontier 2017-05-08 / 5/8群OPEN** を正本として継続。
3. 次未処理 **「パチスロサクラ大戦～熱き血潮に～」** をNo.1073候補として性能コア+resetBehavior v0.7まで処理。
4. その後 **パチスロ 呪怨 → 忍魂 ～暁ノ章～ → ラッキーベガス** を漏れなく確認。
5. 5/8群の全メーカー横断監査後にCLOSED判定し、次の日付境界へ進む。
6. 遡及QAは `2006-05-15_looney-tunes-bia.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1072 パチスロ マクロスフロンティア3
- SANKYOオンライン博物館: https://www.sankyo-fever.jp/collection/689/
- 鹿児島県公報 平成29年3月14日 第3296号: https://dl.ndl.go.jp/view/prepareDownload?contentNo=1&itemId=info%3Andljp%2Fpid%2F11193443
- パチナビ: https://pachinavi.net/machines/macross-frontier-3/
- K-Navi: https://p-kn.com/slot/2751/
- P-WORLD: https://www.p-world.co.jp/machine/database/8322
- パチビー: https://www.pachibee.jp/machines/about/217040004
- ちょんぼりすた: https://chonborista.com/slot/sankyo-slot/34668/
- 期待値見える化: https://slotjin.com/zone/macross3/
- パチスロデータ: https://pachislo-data.com/sankyo/34134
- スロがち.COM: https://slogati.com/macross-f3/

### 次候補 / 5月8日群
- パチビー サクラ大戦: https://www.pachibee.jp/machines/index/217040000
- HAZUSE サクラ大戦: https://hazuse.com/machine/pachislot/6S1598/genre/209/
- パチビー 呪怨: https://www.pachibee.jp/machines/about/217040001
- HAZUSE 呪怨: https://hazuse.com/machine/pachislot/6S1567/genre/207/
- パチビー 忍魂 ～暁ノ章～: https://www.pachibee.jp/machines/about/217040006
- K-Navi 忍魂 ～暁ノ章～: https://p-kn.com/slot/2774/
